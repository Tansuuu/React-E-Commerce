import { ILogin } from "../inheritance/ILogin";
import { AuthResponse } from "../models/AuthResponse";
import AuthService from "../services/AuthService";
import LocalStorageService from "../services/LocalStorageService";
import { Resource, Status } from "../utils/Resource";

class LoginController implements ILogin {
  login(formData): Promise<Resource<AuthResponse>> {
    return (
      new Promise<Resource<AuthResponse>>
      (async (resolve, reject) => {
        try {
          const response = await AuthService.login(formData);
          // console.log("ASDASD");
          // if (response.status == Status.SUCCESS) {
          //   console.log("SELAM CANIM SUCCESS");
            
          // }else if(response.status == Status.ERROR){
          //   console.log("SELAM CANIM ERROR");
          // }
          // console.log(response);
          
          
          if (response.status == Status.SUCCESS) {
            const saveObject = {
              ...response.data!.user,
              password: formData.password,
            };
            LocalStorageService.getLoginFromStorage(saveObject);
            resolve(response);
          }else {
            reject(response);
          }
        } catch (error) {
          reject(Resource.Error(error));
        }
      })
    );
  }
}

// class LoginController {
//   async login(formData) {
//     const response = await AuthService.login(formData);
//     if (response != null) {
//       const saveObject = {
//         ...response.user,
//         password: formData.password,
//       };
//       LocalStorageService.getLoginFromStorage(saveObject);
//     }
//     return response;
//     //   .then((res) => res.json())
//     //   .then((data) => console.log(data.user));
//   }
// }

export default new LoginController();

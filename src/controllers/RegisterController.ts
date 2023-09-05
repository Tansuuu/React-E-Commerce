import { IRegister } from "../inheritance/IRegister";
import { AuthResponse } from "../models/AuthResponse";
import AuthService from "../services/AuthService";
import LocalStorageService from "../services/LocalStorageService";
import { Resource, Status } from "../utils/Resource";

class RegisterController implements IRegister {
  register(formData): Promise<Resource<AuthResponse>> {
    return new Promise<Resource<AuthResponse>>(async (resolve, reject) => {
      try {
        const response = await AuthService.register(formData);

        if (response.status == Status.SUCCESS) {
          const saveObject = {
            ...response.data!.user,
            password: formData.password,
          };
          LocalStorageService.getLoginFromStorage(saveObject);
          resolve(response);
        } else {
          reject(response);
        }
      } catch (error) {
        reject(Resource.Error(error));
      }
    });
  }
}

// class RegisterRepository {
//   async register(formData) {
//     const response = await AuthService.register(formData);
//     if (response != null) {
//       LocalStorageService.getRegisterFromStorage(response);
//       // Kullanıcıyı Local Storage Kaydet
//     }
//     return response;
//     //   .then((res) => res.json())
//     //   .then((data) => console.log(data.user));
//   }
// }

export default new RegisterController();

import AuthService from "../services/AuthService";
import LocalStorageService from "../services/LocalStorageService";

class LoginRepository {
  async login(formData) {
    const response = await AuthService.login(formData);
    if (response != null) {
      const saveObject = {
        ...response.user,
        password: formData.password,
      };
      LocalStorageService.getLoginFromStorage(saveObject);
    }
    return response;
    //   .then((res) => res.json())
    //   .then((data) => console.log(data.user));
  }
}

export default new LoginRepository();

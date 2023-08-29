import AuthService from "../services/AuthService";
import LocalStorageService from "../services/LocalStorageService";

class RegisterRepository {
  async register(formData) {
    const response = await AuthService.register(formData);
    if (response != null) {
      LocalStorageService.getRegisterFromStorage(response);
      // Kullanıcıyı Local Storage Kaydet
    }
    return response;
    //   .then((res) => res.json())
    //   .then((data) => console.log(data.user));
  }
}

export default new RegisterRepository();

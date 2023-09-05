import Constants from "../utils/Constants";

class LocalStorageService {
  getLoginFromStorage(response) {
    localStorage.setItem(
      Constants.LocalStorageUserKey,
      JSON.stringify(response)
    );
  }
  getRegisterFromStorage(response) {
    localStorage.setItem(
      Constants.LocalStorageUserKey,
      JSON.stringify(response.data.user)
    );
  }

  getUser() {
    return JSON.parse(localStorage.getItem(Constants.LocalStorageUserKey));
  }
  checkUser() {
    if (!(localStorage.getItem(Constants.LocalStorageUserKey) === null)) {
      return true;
    }
  }
  deleteUser() {
    localStorage.removeItem(Constants.LocalStorageUserKey);
  }
  upDateUser(response) {
    localStorage.setItem(
      Constants.LocalStorageUserKey,
      JSON.stringify(response)
    );
  }
}

export default new LocalStorageService();

import { ILocalStorage } from "../inheritance/ILocalStorage";
import { User } from "../models/User";
import AuthService from "../services/AuthService";
import LocalStorageService from "../services/LocalStorageService";

class UserPageController extends ILocalStorage {
  // getUser = () => {
  //   return LocalStorageService.getUser();
  // };

  async updateUser(user: User) {
    LocalStorageService.upDateUser(user);
    await AuthService.updateUser(user);
  }
}

export default new UserPageController();

// export default UserPageRepository;

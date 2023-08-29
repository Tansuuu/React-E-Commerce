import AuthService from "../services/AuthService";
import LocalStorageService from "../services/LocalStorageService";

class UserPageRepository {
  getUser = () => {
    return LocalStorageService.getUser();
  };

  async updateUser(user) {
    LocalStorageService.upDateUser(user);
    await AuthService.updateUser(user);
  }
}

export default new UserPageRepository();

// export default UserPageRepository;

import LocalStorageService from "../services/LocalStorageService";

export abstract class ILocalStorage {
  getUser = () => {
    return LocalStorageService.getUser();
  };
}

import Swal from "sweetalert2";
import LocalStorageService from "../services/LocalStorageService";

class Utils {
  static loginPopup = () => {
    if (LocalStorageService.checkUser()) {
      return true;
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Sepete eklemek için giriş yapınız",
        html: "<a href='/login'>Giriş ekranı için tıklayınız</a>",
        showConfirmButton: false,
        timer: 3500,
      });
      return false;
    }
  };

  static refreshPage = () => {
    window.location.reload(false);
  };
}

export default Utils;

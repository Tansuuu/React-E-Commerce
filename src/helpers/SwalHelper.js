import Swal from "sweetalert2";

class SwalHelper {
  cornerPopUp = (icon, title) => {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  confirmPopUp = (title, text, callBack) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // Process
        callBack();
        Swal.fire("Başarılı", "", "success");
      }
    });
  };
}

export default new SwalHelper();

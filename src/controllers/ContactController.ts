import axios, { AxiosError } from "axios";
import { Resource } from "../utils/Resource";

class ContactController {
  emailPost(formData) {
    return axios
      .post("http://localhost:5000/sendEmail", formData)
      .then((response) => {
        console.log(response.data);
        return Resource.Success(response.data, "success");
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.data);
        return Resource.Error(`${error.response?.data}`);
      });
  }
}

export default new ContactController();

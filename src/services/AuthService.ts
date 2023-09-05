import axios, { AxiosError } from "axios";
// import Resourse
import { AuthResponse } from "../models/AuthResponse";
import { Resource } from "../utils/Resource";
import LocalStorageService from "./LocalStorageService";
import { User } from "../models/User";

class AuthService {
  async login(formData): Promise<Resource<AuthResponse>> {
    // const { data, status } = await axios.post<AuthResponse>( "http://localhost:3000/login",{
    //   headers:{Accept: 'application/json'},
    //   data: JSON.stringify(formData),
    // })
    return axios
      .post<AuthResponse>("http://localhost:3000/login", formData)
      .then((response) => {
        console.log("SERVİCE SUCCESS");
        return Resource.Success(response.data, "Giriş Başarılı");
      })
      .catch((error: AxiosError) => {
        console.log("SERVİCE ERROR");
        console.log(error.response?.data);
        return Resource.Error(`${error.response?.data}`);
      });
    // const { data, status } = await axios.post<AuthResponse>( "http://localhost:3000/login",formData);
    // if (status >= 200 && status <= 300) {
    //   return Resource.Success(data, "Giriş Başarılı");
    // }else{
    //   return Resource.Error("Giriş Hatalı");
    // }
    // return data;
    // try {
    //   const response = await fetch("http://localhost:3000/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //   return response.json();
    // } catch (error) {
    //   return null;
    // }
  }

  async register(formData): Promise<Resource<AuthResponse>> {
    return axios
      .post<AuthResponse>("http://localhost:3000/users", formData)
      .then((response) => {
        console.log("SERVİCE SUCCESS");
        return Resource.Success(response.data, "Giriş Başarılı");
      })
      .catch((error: AxiosError) => {
        console.log("SERVİCE ERROR");
        console.log(error.response?.data);
        return Resource.Error(`${error.response?.data}`);
      });
  }
  // async register(formData) {
  //   try {
  //     const response = await fetch("http://localhost:3000/users", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  //     return response.json();
  //   } catch (error) {
  //     return null;
  //   }
  // }

  async updateUser(item): Promise<Resource<User>> {
    return axios
      .put<User>(`http://localhost:3000/users/${item.id}`, item)
      .then((response) => {
        console.log("SERVİCE updateUser SUCCESS");
        LocalStorageService.upDateUser(item);
        // return response.data;
        return Resource.Success(response.data, "Giriş Başarılı");
      })
      .catch((error: AxiosError) => {
        console.log("SERVİCE updateUser ERROR");
        console.log(error.response?.data);
        return Resource.Error(`${error.response?.data}`);
      });
  }
  // async updateUser(item) {
  //   try {
  //     const response = await fetch(`http://localhost:3000/users/${item.id}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(item),
  //     });
  //     LocalStorageService.upDateUser(item);
  //     return response.json();
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
}

export default new AuthService();

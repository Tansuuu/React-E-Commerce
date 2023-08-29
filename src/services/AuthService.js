import LocalStorageService from "./LocalStorageService";

class AuthService {
  async login(formData) {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      return response.json();
    } catch (error) {
      return null;
    }
  }

  async register(formData) {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      return response.json();
    } catch (error) {
      return null;
    }
  }

  async updateUser(item) {
    try {
      const response = await fetch(`http://localhost:3000/users/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      LocalStorageService.upDateUser(item);
      return response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new AuthService();

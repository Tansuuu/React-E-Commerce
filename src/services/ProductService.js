import Constants from "../utils/Constants";

class ProductService {
  async getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return response.json();
    } catch (error) {
      return null;
    }
  }

  async productBasketControl(userId, productId) {
    const response = await fetch(
      `http://localhost:3000/productBaskets?productId=${productId}&userId=${userId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.json();
  }

  async addToCard(item) {
    console.log(item);
    try {
      const response = await fetch("http://localhost:3000/productBaskets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...item,
          userId: JSON.parse(
            localStorage.getItem(Constants.LocalStorageUserKey)
          ).id,
          count: 1,
        }),
      });
      return response.json();
    } catch (error) {
      return null;
    }
  }

  async updateProductBasket(item) {
    try {
      const response = await fetch(
        `http://localhost:3000/productBaskets/${item.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }
      );
      return response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getBasket(userId) {
    const response = await fetch(
      `http://localhost:3000/productBaskets?userId=${userId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.json();
  }

  async deleteBasketProduct(item) {
    const response = await fetch(
      `http://localHost:3000/productBaskets/${item.id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      }
    );
    return response.json();
    // console.log(response);
  }

  async deleteBasketProducts(item) {
    const response = await fetch(
      `http://localhost:3000/productBaskets/${item.id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      }
    );
    return response.json();
  }

  async getCategories() {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    return response.json();
  }

  async updateUserCount(item) {
    try {
      const response = await fetch(`http://localhost:3000/users/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      return response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new ProductService();

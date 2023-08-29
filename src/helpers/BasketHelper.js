class BasketHelper {
  basket;
  getSize() {
    if (this.basket == undefined) {
      return 0;
    } else {
      return this.basket?.reduce((acc, obj) => acc + obj.count, 0) ?? 0;
      //   return this.basket.length;
    }
  }

  getCount() {
    return (
      this.basket
        ?.reduce((acc, obj) => acc + obj.price * obj.count, 0)
        .toFixed(2) ?? 0.0
    );
  }

  getBasket() {
    return this.basket;
  }

  setBasket(value) {
    this.basket = value;
  }

  addProductToBasket(item) {
    this.basket.push(item);
    // console.log(this.basket);
  }

  deleteFromBasket(id) {
    for (let index = 0; index < this.basket.length; index++) {
      const item = this.basket[index];
      if (item.id == id) {
        this.basket.splice(index, index);
      }
    }
    // this.basket.drop
  }
}

export default new BasketHelper();

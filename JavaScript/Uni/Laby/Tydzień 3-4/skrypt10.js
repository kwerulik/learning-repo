class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart{
    constructor(){
        this.items = [];
    }

    addProduct(product){
        this.items.push(product);
    }

    totalCost() {
        return this.items.reduce((total, product) => total + product.price, 0);
    }
}
const cart = new ShoppingCart();

const Laptop = new Product("Laptop", 2000);
const Monitor = new Product("Monitor", 1000);

cart.addProduct(Laptop);
cart.addProduct(Monitor);

console.log(cart.totalCost());

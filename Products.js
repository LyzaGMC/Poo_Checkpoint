class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Méthode pour calculer le prix total de l'élément dans le panier
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}
class ShoppingCart {
  constructor() {
    this.items = []; // Tableau d'instances de ShoppingCartItem
  }

  // Méthode pour ajouter un produit au panier
  addItem(product, quantity) {
    const cartItem = new ShoppingCartItem(product, quantity);
    this.items.push(cartItem);
  }

  // Méthode pour supprimer un élément du panier par son id de produit
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Méthode pour obtenir le total des éléments (nombre total de produits dans le panier)
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Méthode pour obtenir le total des prix dans le panier
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Méthode pour afficher les éléments du panier
  displayCart() {
    if (this.items.length === 0) {
      console.log("Votre panier est vide.");
    } else {
      this.items.forEach((item) => {
        console.log(
          `Produit: ${item.product.name}, Quantité: ${
            item.quantity
          }, Prix total: ${item.getTotalPrice()}€`
        );
      });
      console.log(`Prix total du panier: ${this.getTotalPrice()}€`);
    }
  }
}
// Créer des produits
const product1 = new Product(1, "Ordinateur portable", 1200);
const product2 = new Product(2, "Souris", 25);
const product3 = new Product(3, "Clavier", 45);

// Créer un panier d'achat
const shoppingCart = new ShoppingCart();

// Ajouter des éléments au panier
shoppingCart.addItem(product1, 1); // 1 Ordinateur portable
shoppingCart.addItem(product2, 2); // 2 Souris
shoppingCart.addItem(product3, 1); // 1 Clavier

// Afficher le panier
shoppingCart.displayCart();

// Supprimer un élément du panier (par exemple, la souris)
shoppingCart.removeItem(2);

// Afficher le panier après suppression
shoppingCart.displayCart();

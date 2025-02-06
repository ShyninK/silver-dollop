const sampleProducts = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Phone", category: "Electronics", price: 500 },
    { id: 3, name: "Shirt", category: "Apparel", price: 50 },
    { id: 4, name: "Shoes", category: "Apparel", price: 80 },
    { id: 5, name: "Watch", category: "Accessories", price: 200 },
  ];

  function getProductsByCategory(products, category) {
    return products.filter((products) => products.category === category);
  }

  function findProductById(products, id) {
    return products.filter((products) => products.id === id);
  }

  function calculateTotalPrice(products) {
    return sampleProducts.reduce((acc, products) => acc + products.price, 0);
  }

  function applyDiscount(products, discount) {
    return sampleProducts.map(
      (products) => products.price * (1 - discount / 100)
    );
  }
  
console.log(`Get Product by category(Electronics) :`, getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
console.log(`Get Product by id(3) :`, findProductById(sampleProducts, 3)); // Should return the product with id 3
console.log(`Total price :`, calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(`Get list products price with 10% disc :`, applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%  
console.log(`Get all products :`,sampleProducts);
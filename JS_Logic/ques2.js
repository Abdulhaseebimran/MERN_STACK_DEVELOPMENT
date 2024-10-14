// filtering an array of objects to display items based on a search query(e.g., filtering an array of products brands)

let products = [
    {
        name: "laptop",
        price: 1000,
        brand: "HP"
    },
    {
        name: "desktop",
        price: 800,
        brand: "Dell"
    },
    {
        name: "mobile",
        price: 500,
        brand: "Samsung"
    },
    {
        name: "tablet",
        price: 300,
        brand: "Apple"
    },
    {
        name: "smartwatch",
        price: 200,
        brand: "Fitbit"
    }
];

let searchProducts = products.filter((product) => {
    if(product.brand === "Dell") {
        return product;
    }
});

console.log(searchProducts);

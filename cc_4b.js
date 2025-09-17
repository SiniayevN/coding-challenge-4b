let products = [
    { sku: "001", name: "Apple", category: "Fruit", price: 1, inventory: 100 },
    { sku: "002", name: "Banana", category: "Fruit", price: 2, inventory: 150 },
    { sku: "003", name: "Carrot", category: "Vegetable", price: 3, inventory: 200 },
    { sku: "004", name: "Broccoli", category: "Vegetable", price: 7, inventory: 80 },
    { sku: "005", name: "Chicken Breast", category: "Meat", price: 15, inventory: 50 },
];
//Step 2 done 

let discount =0;
for (let products of products) {
    switch (products.category) {
        case "Fruit":
            discount = .2; 
            break;
        case "Vegetable":
            discount = .15;
            break;
        case "Meat":
            discount = .1; 
            break;
    }
    
}
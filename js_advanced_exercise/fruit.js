function fruit(fruitName, weightInGrams, pricePerKg){
    let kg = weightInGrams / 1000;
    let price = kg * pricePerKg
    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms to buy ${fruitName}.`)
}

fruit('orange', 2500, 1.50)
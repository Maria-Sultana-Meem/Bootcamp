// const products = [
//     {name:'shampoo',price:300},
//     {name:'chiruni',price:100},
//     {name:'shirt',price:700},
//     {name:'pant',price:1300},
// ]

// function getShoppingTotal(products){
//     let sum = 0;
//  for (const product of products) {
//     sum = sum + product.price
//  }
//  return sum
// }
// console.log(getShoppingTotal(products));


const products = [
    {name:'shampoo',price:300,quantity:2},
    {name:'chiruni',price:100,quantity:3},
    {name:'shirt',price:700,quantity:5},
    {name:'pant',price:1200,quantity:1},
]

 function getShoppingTotal(products){
    let sum = 0;
 for (const product of products) {
    sum = sum + product.price*product.quantity
 }
 return sum
}
console.log(getShoppingTotal(products));


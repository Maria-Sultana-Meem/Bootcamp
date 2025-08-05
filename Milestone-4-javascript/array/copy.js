let price=25;
const compPrice=price;
 price=20;

 console.log(price);
 console.log(compPrice);

 
 const products=[1,2,3,5,6];
 const comPro=[];
 for (const element of products) {
    comPro.push(element)
 }
 console.log(comPro);
 

 const numbers =[1,2,3,4];
//  const newNumbers= Array.from(numbers)
//  newNumbers.push(8)
//  console.log(newNumbers);
 

const newNumbers=[].concat(numbers);
console.log(newNumbers);

const newNum =[...numbers]

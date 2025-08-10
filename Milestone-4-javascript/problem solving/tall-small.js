const heights =[65,78,45,100,67,43,50];
function getMax(numbers){
     let max = numbers[0];
for (const number of numbers) {

 if (number>max) {
    max=number
 }

}
    return max
}
console.log(getMax(heights));


const height =[65,78,45,100,67,43,50];
function getMin(numbers){
     let min = numbers[0];
for (const number of numbers) {

 if (number<min) {
    min=number
 }

}
    return min
}
console.log(getMin(height));

const prices=[20000,15000,30000,45000,34000];
 function getCheap(numbers){
  let min = numbers[0]
for (const num of numbers) {
    if (num<min) {
         min=num
    }
}
return min
 }
const cheap = getCheap(prices);
console.log('cheapest one is:',cheap);

const mobiles =[
   {name:'Samsung',price:30000,camera:'12mp',color:'black'},
   {name:'Oppo',price:23000,camera:'12mp',color:'black'},
   {name:'Vivo',price:33000,camera:'12mp',color:'black'},
   {name:'Ipone',price:333000,camera:'12mp',color:'black'}
] 

function cheapestPhone(phones){
    let min = phones[0]
 for (const phone of phones) {
     if (phone.price<min.price) {
        min = phone
     }

 }
 return min

}
const cheapest = cheapestPhone(mobiles);
console.log('Cheapest phone is:', cheapest);

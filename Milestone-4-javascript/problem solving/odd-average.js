function oddAverage(numbers){
   let odds =[];
for (const num of numbers) {
    
    if (num % 2 !==0) {
       odds.push(num)
    }
}
 let sum = 0;
 for (const odd of odds) {
    sum+=odd
 }
 const count=odds.length
 const avg = sum/count;
 return avg
}
const numbers=[42,13,58,65,81,96,7];
const avg= oddAverage(numbers);
console.log('average of the odd numbers is :',avg);

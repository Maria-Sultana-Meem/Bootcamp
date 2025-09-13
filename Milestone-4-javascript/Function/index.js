function difference(num1,num2){
const diff = num1 - num2
console.log(num1,num2,'difference is',diff);

}
const fatherAge= 40;
const myAge= 20;
difference(fatherAge,myAge);

function doubleOrTriple(number,doDouble){
    if (doDouble===true) {
        const result = number*2
        return result
    } else {
        const result = number*3
        return result
    }
}

console.log(doubleOrTriple(5,true));
console.log(doubleOrTriple(5,false));


function sumOfNumbers(numbers){
  let sum = 0;
  for (const number of numbers) {
     sum+=number
  }
  return sum
}
const numbs =[1,2,3,4,5]
const sum = sumOfNumbers(numbs)
console.log(sum);



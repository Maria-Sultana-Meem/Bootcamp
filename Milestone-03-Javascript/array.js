// ! array-length,index.........

const numbers=[1,2,3,4,5,6,7,8,9,0]
console.log(numbers.length);
console.log(numbers[5]);

const fourth= numbers[3]
console.log(fourth);

// set or update element value by index

let abc= 45;
abc=99;
numbers[1]=99;
console.log(numbers);

//!.array-push-pop....


const number=[12,13,50,53]

// console.log(number);
number.push(100);
number.push(200,300,400);
number.pop()
console.log(number);

// ! array-shift-unshift.....
const friends=['maria','sultana','meem']
friends.shift()
friends.unshift('mehek')
console.log(friends);

console.log(friends.includes('meem'));
 
if (friends.includes('sultana')) {
    console.log('party');
    
 } else {
    console.log('kichuina');
    
 }

 console.log(friends.indexOf('sultana'));
 console.log(friends.indexOf('sultan'));
 
console.log(Array.isArray(friends));

console.log(friends.join(' + '));


console.log(number.concat(numbers));
// 2teke 4er ag porjonto
console.log(number.slice(2,4));
// 2teke suru kore 4ta nibe
console.log(number.splice(2,4));



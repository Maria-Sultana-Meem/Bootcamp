// const capital = 'Dhaka';
// console.log(capital.length);
// console.log(capital[3]);

// string is immutable--> not changeable
// array is mutable-->you can change the array elements
/*
const school='Shaheed smriti bidyapeeth'
const subject ='Chemistry'
const book ='chemistry'
if (subject.toLowerCase()===book.toLowerCase()) {
    console.log('same');
    
} else {
    console.log('not same');
    
}

const drink= 'water';
const liquid='    water';
if (drink.trim()===liquid.trim()) {
    console.log('same');
    
} else {
    console.log('not same');
    
}
*/

// ! slice

// const address='netrokona';
// const part=address.slice(2,4);
// console.log(part);

// ! split

// const sentence= 'i am a good hardworking person';
// console.log(sentence.split());
// console.log(sentence.split(''));
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

// ! join

// const friend = ['meem','muksina','sabiha','jein'];
// console.log(friend.join());
// console.log(friend.join(' + '));

// ! concat
// const first ='Maria';
// const second ='Sultana';
// const fullName = first + ' ' + second;
// console.log(fullName);
// console.log(first.concat(" ").concat(second));

// ! includes
// console.log(second.includes('u'));


// ! reverse

 const sentence = 'I am learning web dev';
  let reverse =''
//  for (const letter of sentence) {
//     // console.log(letter);
//     reverse = letter+ reverse
    
//  };
//  console.log(reverse);
 
for(let i = 0; i<sentence.length;i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    reverse=letter+reverse;
     
}
console.log(reverse);
const reversed = sentence.split('').reverse().join('');
console.log(reversed);


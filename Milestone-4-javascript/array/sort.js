// !...sort......
const numbers=[2,6,4,7,9];
numbers.sort();
console.log(numbers);

const friends=['samia','mahia,','sultana','ahiya'];
friends.sort()
console.log(friends);

const ages=[1,5,100,15,8,2,28]
// ages.sort();
// console.log(ages);
// !ascendiing
const sortedAge=ages.sort(function(a,b){return a-b});
console.log(sortedAge);
// !descending
const sortedAgeDes=ages.sort(function(a,b){return b-a});
console.log(sortedAgeDes);

const persons=['maria','sultana','meem','maria','sabiha','sultana'];
function noDupli(array){
const unique = [];
for (const arr of array) {
    
   if (unique.includes(arr)===false) {
       unique.push(arr)
   }

}
  return unique
}
console.log(noDupli(persons));


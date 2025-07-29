//! ........while loop........
/*
let num =0;
while (num<5) {
    console.log('lopping',num);
    num++
}
    */
//^ ..........sum........
/*
let num=1;
let sum=0;
while (num<=10) {
    console.log(num);
    sum=sum+num;
    console.log('sum:',sum);
    
    num++
}
*/
// ^...........even........
/*
let even=1;
while (even<=10) {
    // console.log(even);
    if (even % 2 === 0) {
        console.log('even number',even);
        
    }
    
    even++
}
*/
// ?....decremental while loop
/*
let num1=10;
while(num1>=0){
    console.log(num1);
    num1--;
}
*/

// !..........for loop...........
/*
let sum2 = 0;
for(let i = 11;i<=20;i++){
    sum2=sum2+i;
    // console.log(i);
    
}
console.log('sum of number from 11 to 20 is',sum2);
*/
//? dedremental for loop
/*
for(let i =20;i>=10;i--){
    console.log(i);
    
}
    */


// &.............odd numbers.....
/*
for(let i =0;i<20;i++){
    if (i % 2===1) {
        console.log(i);
        
    }
};
*/
//* another style...
/*
for(let i =0;i<20;i++){
    if (i % 2!==0) {
        console.log(i);
        
    }
};
*/
//* another......
/*
for(let i =1;i<20;i+=2){
    console.log(i);
    
};
*/

//?give me the list numbers between 1 to 30 divisible by 5 
/*
for(let i=1;i<=30;i++){
    if (i%5===0) {
        console.log(i);
        
    }
};*/
// * 5 or 3 divisible
/*
for(let i=1;i<=30;i++){
    if (i%3===0 || i%5==0) {
        console.log(i);
        
    }
};
*/
// * 5 and 3 divisible
/*
for(let i=1;i<=30;i++){
    if (i%3===0 && i%5==0) {
        console.log(i);
        
    }
};
*/
// ?give me the sum of numbers from 1 to 20 that are divisible by 3
/*
let total=0
for(let i =1; i<=20;i++){
   if (i % 3===0) {
    console.log(i);
    total=total+i;
    
   }
}
console.log('total of the numbers',total);
*/

// !.............Break and continue...........
// ^break
/*
for(let i=0; i<15;i++){
    console.log(i);
    if (i>=5) {
        break;
    }
    
}
    */
/*
let n=54;
while(n>25){
   
    if(n<50){
        break
    }
     console.log(n);
    n--;
    
*/
// ^continue
/*
for(let i=1;i<10;i++){
    if (i%2===1) {
        continue;
        
    }
    console.log(i);
    
};
*/
/*
let n=0;
while (n<15) {
     n++;
    if (n%5 !==0) {
        continue;
    }
    console.log(n);
   
    
*/

// !..........do while loop........
/*
let i=0;
do {
    console.log(i);
    i++;
    
}
 while (i<5);
 */

 
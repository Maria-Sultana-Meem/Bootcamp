
/*
isNaN() হল JavaScript এর একটি function যেটা চেক করে কোনো value "NaN" (Not a Number) কিনা।

যদি value টি NaN হয়, তাহলে isNaN() return করে true

যদি value টি number হয়, তাহলে isNaN() return করে false
*/

 var a = isNaN('11');
 console.log(a);
var b = isNaN(2-10);
console.log(b);
var c=isNaN('11abc');
console.log(c);

// if else............

const salary=28000;
const isBcs=true;
const height=61;
const hascar=false;
/*
if (salary>20000 && height>66) {
    console.log('perfect');
    
} else {
    console.log('not perfect');
    
}
    */

if (salary>20000 || height>66) {
    console.log('perfect');
    
} else {
    console.log('not perfect');
    
}

// ...............complex condition........

// if ((salary>25000 && hascar==true) || isBcs==true) {
//     console.log('qualified');
if ((salary>25000 || hascar==true) && isBcs==true) {
    console.log('qualified');
    
} else {
    console.log('not qualified');
    
}
// ...............discount price............

const price=3000;
if (price>=5000) {
    // 10% discount
    const discount=price*10/100;
    const payAmount =price-discount;
    console.log(payAmount);
    
} 
else if(price>2500){
//    discount 5%
const discount=price*5/100;
    const payAmount =price-discount;
    console.log(payAmount);
}
else {
    console.log(price);
    
}

// ............condition age........

const age =65;
const Price = 500;
if(age<=12){
    console.log('you can eat for free');
    
}
else if (age>=60) {
    const discount=Price*50/100;
    const payAmount =Price-discount;
    console.log(payAmount);
}
 else {
    console.log(Price);
    
}


// ............nested...........

const money =100;
if (money>300) {
    console.log('you are rich');
    
} else {
    if (money>100) {
        console.log('you are poor');
        
    } else {
        if (money>0) {
            console.log('so poor');
            
        }
        else{
            console.log('altra poor');
            
        }
    }
} 

// !...........ternary operator............

//^ condition ? true:false


const Age =12;
if (Age>=18) {
    console.log('you can vote');
    
} else {
    console.log('you are not eligible');
    
}

Age>=18?console.log('vote dio'):console.log('not eligible');


let taka=500;
const isLeader=false;
// if (isLeader===true) {
//     taka=0;
// } else {
//     taka+=100
// }
// console.log(taka);
 
taka = isLeader === true ? console.log(0)
 : console.log(taka+100);


//  ...........shortcut....

const isleader=true;
if (!isleader) {
    console.log('leader come');
    
} else {
    console.log('not come');
    
}





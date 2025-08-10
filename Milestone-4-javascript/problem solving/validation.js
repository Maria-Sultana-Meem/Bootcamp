function multi(num1,num2){
    if (typeof num1 !=='number' || typeof num2 !=='number') {
        return 'plese provide a valid number'
    }

    const mul= num1* num2;
    return mul
}
console.log(multi(5,'stirng'));


function getPrice(product){
    
    if (typeof product !=='object') {
        return 'please provide an object'
    }

    const price= product.price
    return price
}

const price = getPrice({name:'mobile',price:25000})

console.log(price);



function getSecond(number){
    
    if (Array.isArray(number)===false) {
        return 'please provide an array'
    }

    const second=number[1]
    return second
}
const second = getSecond([1,2,3])
console.log(second);

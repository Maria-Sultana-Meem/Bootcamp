const person = {
    name:'maria sultana',
    age:20,
    profession:'student',
    married:false,
    'fav places':['bandarban','sundorban']
}

// console.log(person.profession);
// console.log(person['married']);
// console.log(person['fav places']);
// person.age=21;
// person['fav places']=['kishoreganj']
// console.log(person);

// const keyNm='profession';
// person[keyNm]='devops';
// console.log(person);

// ! keys and values..........

// const keys = Object.keys(person)
// console.log(keys);
// const values= Object.values(person);
// console.log(values);
// ! nested.......
/*
const college ={
    name:'Vnc',
    class:[11,12],
    events:['science fair','21 feb'],
    unique:{
        color:'blue',
        result:{
            merit:'top'
        }
    }
};

college.unique.result.merit='top top top'
console.log(college.unique.result.merit);
college.events[1]='16 dec'
console.log(college.events[1]);
delete college.class;
console.log(college);
*/

// ! loop in object

const mobile ={
    brand:'samsung',
    price:2500,
    color:'black',
    camera:'12mp',
    isNew:true
}
for (const prop in mobile) {
    console.log(prop);
    console.log(mobile[prop]);
    
    
};

const keys=Object.keys(mobile);
console.log(keys);
for (const key of keys) {
    console.log(key,':',mobile[key]);
    
}

const pencil = new Object()
console.log(pencil);

const pen = Object.create({})
console.log(pen);




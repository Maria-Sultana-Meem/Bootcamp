const numbers=[1,2,3,4,5];
const runs =[[],[],[]];
const marks=[
    [87,45,55,34,78],
    [77,45,55,34,78],
    [57,45,55,34,78],
    [97,45,55,34,78]
]
console.log(marks[0][0]);
console.log(marks[1][3]);
marks[0][0]=99;
marks[1].pop();
marks[2].push(33)
console.log(marks);

for (const mark of marks) {
    console.log(mark);
    
}


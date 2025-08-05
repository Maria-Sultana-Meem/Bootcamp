const numbers=[1,2,34,55,67];
const employess = [
    {name:'Meem',designation:'content writer',salary:25000},
    {name:'Maria',designation:'Developer',salary:29000}
]
console.log(employess[1].salary);

for (const employee of employess) {
    // console.log(employee.salary);
    const personInfo=employee.name + ' : ' +employee.salary;
    console.log(personInfo);
    
    
}

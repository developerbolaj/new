// method chaining

function a(){
  return  function b(){
    console.log("This is from b");
}
}
let hi = a()
hi()

function x(a){
   return function y(b){
      return a+b
    }
}
let sum = x(4)(7)
console.log(sum);

var stu = [{name : "revati", age : 25},
{name : "rutuja", age: 26}, {name: "pranita", age: 20}
]

stu.map (i=>console.log(i.age))
 

console.log(stu);
for(let i=0; i<stu.length; i++){
    console.log(stu[i].name);
}

var workers = [
  {name : "satish", salary:15000, post:"manager"},
    {name : "amol", salary:30000, post:"worker"},
      {name : "prasad", salary:40000, post:"technician"},
        {name : "sejal", salary:25000, post:"repairman"},
 ]
workers.map (i=>console.log(i.salary , i.name))
console.log(workers);
for (let i = 0; i<workers.length; i++) {
console.log(workers[i].name);
  }

  


function abc(){
  var k="kanchan"
  console.log(k);
}

abc();
console.log(k);



const person={
  name:"kanchan",
  age:26,
  heigth:5.6
}
for (key in person)
{
  console.log(person[key])
}


let nums={
  a:100,
  b:200,
  title:"my nums"
}

 function multi(x)
 {
  for( key in x){
    if(typeof x[key]==="number")
     console.log(x[key]*2);
     }}
 multi(nums);


const shape={
  radius:10,
  diameter(){
return this.radius * 2;
  },
  perimeter:()=>
     2*Math.PI*this.radius,
  
  
};

console.log(shape.diameter());
console.log(shape.perimeter());


let c="kanchan"
let d=c;
console.log(d);
console.log(c);
c="hey";
console.log(c)


let person={
  name:"kanchan"
};
const member=[person];


console.log(member)

const value={ number:10};
const multi=(x={...value})=>
  {
    console.log((x.number*=2));
  };

  multi();
  multi();
  multi(value)
  multi(value)

arr=['kanchan','rana']
console.log(arr)


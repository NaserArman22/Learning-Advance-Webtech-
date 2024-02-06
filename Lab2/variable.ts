let a:number=10;
let b:string="Hello";
let c:boolean=true;
console.log(a);
function add(a: number,b: number):number{
    return a+b;
}
console.log(add(20,20));
//npx tsc variable.ts
//node variable.js
type Person={id:number,name:string};
let p:Person={id:1,name:"john"};
console.log(p);
let y: number| string;
y="john";
console.log(y);

//any type
let data:any;
data='something';
console.log(data);
//enum type
enum Color{Red,Green,Blue};
let color:Color=Color.Green;
console.log(color);

//Literal type
let z:"red"|"Green"|"Blue";
z="red";
console.log(z);
//Tuple type
let employee:[number,string];
employee=[1,"Steve"];
console.log(employee);
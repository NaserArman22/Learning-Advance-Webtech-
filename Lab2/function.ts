//npx tsc function.ts


let addNumbers5=(a:number,b:number):number=>a+b;
console.log(addNumbers5(10,20));
function addNumbers2(a:number,b:number,c:number=0):number{
    return a+b+c;
}
function addNumbers3(...nums:number[]):number{
    let sum:number=0;
    for(let num of nums){
        sum+=num;
    }return sum;
}
function addNumbers4(a:number,b:number):number;
function addNumbers4(a:string,b:string):string;
function addNumbers4(a:any,b:any):any{
    return a+b;
}
console.log(addNumbers4(10,20));

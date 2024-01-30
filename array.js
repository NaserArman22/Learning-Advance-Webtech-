let numbers=[1,2,3,4,5];
let fruits=['apple','banana','mango','orange'];
let mixedArray=[1,'two',{name:'Alice'},[7,8,9]];
let firstnumber=numbers[0];
let secondFruit=fruits[1];
let thirdElement=mixedArray[2];
let fourthElem=mixedArray[3];
console.log(fourthElem);
numbers.push(6);
fruits.pop();
fruits.unshift('pear');
numbers.shift();
numbers.forEach(function(numbers)
{
    console.log(numbers);
})
let doubleNum=numbers.map(function(number){
 return number*2;
})
console.log(doubleNum);
const evenNum=numbers.filter(function(num)
{
    return num%2===0;
});
console.log(evenNum);

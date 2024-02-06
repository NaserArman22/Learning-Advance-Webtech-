var a = 10;
var b = "Hello";
var c = true;
console.log(a);
function add(a, b) {
    return a + b;
}
console.log(add(20, 20));
var p = { id: 1, name: "john" };
console.log(p);
var y;
y = "john";
console.log(y);
//any type
var data;
data = 'something';
console.log(data);
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Green;
console.log(color);
//Literal type
var z;
z = "red";
console.log(z);
//Tuple type
var employee;
employee = [1, "Steve"];
console.log(employee);

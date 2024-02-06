//npx tsc function.ts
var addNumbers5 = function (a, b) { return a + b; };
console.log(addNumbers5(10, 20));
function addNumbers2(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
function addNumbers3() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    return sum;
}
function addNumbers4(a, b) {
    return a + b;
}
console.log(addNumbers4(10, 20));

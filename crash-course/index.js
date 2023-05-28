var userName = "Chaker";
console.log(userName + " Amine");
var id = 10;
var company = "BedayaTech";
var isLucratif = true;
var x = "Any Type";
// arrays in ts
var ids = [1, 55, 74];
var arr = [1, true, "array has many types"];
// union which accepts two types in one variable
var dble = 15;
dble = "second type";
//enum is used to enumerate each variable by order
//and each variable can be changed with any type
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
var patient = {
    patientNumber: 55,
    patientName: "Rachid",
};
//Type Assertion
//say you want to use a variable but change the type
//you can overlap the type by using 'as'
var firstVar = 21;
var secondVar = firstVar;
// TS in functions
// you can declare the argument types and the retun value type
var sumTwo = function (a, b) {
    return a + b;
};
console.log(sumTwo(1, 2));
// but there are functions that return nothing so you must declare that by typing "void"
var nonFunction = function (msg) {
    console.log(msg);
};
nonFunction("a void function");
// Generics are used to build reusable components
// by using a placehoder to have same structre but diffrent types
var getArray = function (items) {
    return new Array().concat(items);
};
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["hello", "this", "is a generic elemnt"]);

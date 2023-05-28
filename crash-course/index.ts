let userName: string = "Chaker";
console.log(userName + " Amine");
let id: number = 10;
let company: string = "BedayaTech";
let isLucratif: boolean = true;
let x: any = "Any Type";

// arrays in ts

let ids: number[] = [1, 55, 74];
let arr: any[] = [1, true, "array has many types"];

// union which accepts two types in one variable
let dble: string | number = 15;
dble = "second type";

//enum is used to enumerate each variable by order
//and each variable can be changed with any type
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1.Left);

//Objects
// create a type before using it
// READ ONLY is to say you cant modify
// question mark is to say that using the var is optional
type Patient = {
  readonly patientNumber: number;
  patientName?: string;
};

const patient: Patient = {
  patientNumber: 55,
  patientName: "Rachid",
};

//Type Assertion
//say you want to use a variable but change the type
//you can overlap the type by using 'as'
let firstVar: any = 21;
let secondVar = firstVar as string;

// TS in functions
// you can declare the argument types and the retun value type

const sumTwo = (a: number, b: number): number => {
  return a + b;
};

console.log(sumTwo(1, 2));

// but there are functions that return nothing so you must declare that by typing "void"

const nonFunction = (msg: number | string): void => {
  console.log(msg);
};
nonFunction("a void function");

// Generics are used to build reusable components
// by using a placehoder to have same structre but diffrent types

const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items);
};

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["hello", "this", "is a generic elemnt"]);

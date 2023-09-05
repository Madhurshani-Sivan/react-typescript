// Primitives: number, string, boolean

let age: number;
age = 12;

let userName: string | string[];
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// Complex Types: arrays, objects

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

type Person = { name: string; age: number };

let person: Person;
person = { name: "Max", age: 32 };
//person = { isEmployee: true };

let people: Person[];

// Type Inference

let course: string | number = "React - The Complete Guide";
course = 12341;

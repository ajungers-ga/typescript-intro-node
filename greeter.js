// // 1. Basic function without types
// function greeter(person) {
//     return "Hello, " + person;
//   }
//   // 2. Variable with no type
//   let user = "Jane User";
//   // 3. Log to console (Node-style)
//   console.log(greeter(user));
// function greeter(person: string): string {
//     return "Hello, " + person;
//   }
// //   let user: string = "Jane User";
//   let user: number[] = [0, 1, 2];
// console.log(greeter(user));
//   console.log(greeter(user));
// interface Person {
//     firstName: string;
//     lastName: string;
//   }
//   function greeter(person: Person): string {
//     return "Hello, " + person.firstName + " " + person.lastName;
//   }
//   let user = { firstName: "Jane", lastName: "User" };
//   console.log(greeter(user));
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(middleInitial, " ").concat(lastName);
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));

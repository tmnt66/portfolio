class Person {
    constructor(name , lastname){
    this.name = name;
    this.lastname = lastname
    }
}
let person1 = new Person("bran" , "sharma")
let person2 = new Person("udit" , "narayan")
function greeting(greet1 , greet2){
    console.log(`hi i am ${this.name} ${this.lastname} ` + " " + greet1 + " " + greet2);
}
greeting1 = greeting.bind(person1);
greeting1("hello" , "welcome")
console.log(greeting1)


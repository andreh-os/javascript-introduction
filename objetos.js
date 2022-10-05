console.log("* Objetos *");

const person = {
  firstName2: "André",
  lastName2: "Oliveira",
  age: "20",
  hobbies: ["Assistir séries", "Jogar volei", "Jogar videogames"],
  dog: {
    name: "Simba",
    age: 4,
  },
};

//const firstName2 = person.firstName;
//const lastName2 = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

const {
  firstName2: primeiroNome,
  lastName2,
  age,
  hobbies,
  dog: { name: dogName },
} = person;

const read = person.hobbies[2];

console.log(primeiroNome);
console.log(lastName2);
console.log(age);
console.log(hobbies);
console.log(read);

//person.dog = "Simba";

console.log(person);

console.log(person.dog.name);
console.log(dogName);

const todos = [
  {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

const descriptionOfLastTodo = todos[2].description;
console.log(descriptionOfLastTodo);

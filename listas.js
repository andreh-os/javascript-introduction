console.log("* Listas *");

const names2 = ["Felipe", "João", "Júlia"];

const joao = names2[1];

names2.push("Pedro");
names2.unshift("Fernanda");

names2.pop();
names2.pop();
names2.pop();

names2[3] = "Gustavo";

console.log(names2.indexOf("Felipe"));

const sortedNames = names2.sort();

console.log(names2);
console.log(sortedNames);

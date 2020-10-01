import { choise, remove, counter } from "./helpers";
import fruts from "./foods";

var n = choise(fruts);

console.log("I would like " + fruts[n] + ", please");
console.log("Here you go: " + fruts[n]);
let newDep=remove(fruts, n);

console.log("Sorry we dont have that anymore");
let nume = counter(newDep);
console.log(`We just have ${nume} fruits remaining`);
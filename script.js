const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);

let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

const array1 = [1,2,3];
console.log(array1.unshift(4,5));
console.log(array1);

fruits.pop();
console.log(fruits);

const array2 = [1,2,3];
const firstElement = array2.shift();
console.log(array2);
console.log(firstElement);
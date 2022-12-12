function mystery(...params) {
     return params; 
    } 
let a = mystery(1,23,4);
console.log(a);

const array = [1, 2, 3];
const extension = [4, 5, 6];
const newArray = [...array, ...extension];
console.log(newArray);

let arr = [1,2,3,4]; 
let plusOne = arr.map(n => n +  1);
console.log(arr); console.log(plusOne);

const add = (a = 10, b = 5) => a +  b; 
add(5, 4); 
add(3); 
add(null, 9); 
add(undefined, 9); 
add();
console.log(add);

const array1 =[1, 3, 4, 2, 7, 9, 10, 6, 8];
const array2 =[1, 3, 9, 11, 5, 7, 13];
const intersection = array1.filter(element => array2.includes(element));
console.log(intersection);
// umumiy
//  1 msol
// let arr = [12,17,19,'salom'];
// let a = arr.includes(12);
// console.log(a);

// 2 msol

// let arr = [2,5,8,10,'hayr'];
// let b = arr.indexOf(10);
// console.log(b);

// 3 misol

// let arr = [2,8,9,2,'salom'];
// let a = arr.lastIndexOf(2);
// console.log(a);

// 4 misol

// let arr = [8, 10, 8, 15, 18];
// let a = arr.find(function (value) {
//   return value > 9 && value < 100;
// });

// console.log(a);

// 5 misol

// let arr = [1, 8, 19, 15, 18];
// let v = arr.find(function (value, index) {
//  console.log(value,index);
//   return value > 9 && value < 100;
// });

// console.log(v);

// 6 misol

// let arr = [1, 8, 19, 15, 18];
// let v = arr.findLast(function (value) {
//  console.log(value);
//   return value > 9 && value < 100;
// });

// console.log(v);

// 7 misol
//  let arr = [1,8,9,5,15,99];
//  let a = arr.findLastIndex(function(value){
//  console.log(value);
//   return value > 9 && value < 100;
// });
// console.log(a);

// 8 misol

// let arr = [1,2,3,4,5];
// let a =arr.reverse();
// console.log(a);

// 9 misol
// let arr = [1,9,3,8,5,-8,-9];
// let a =arr.sort(function(a,b){
// return a - b;
// });
// console.log(a);

// 10 misol

// let arr = [1,2,3,4,5];

// let a = arr.forEach(function(value){
// console.log(value * 2);
// });

// 11 misol

// let arr =[8,-7,2,-1,-4];
// let a = arr. filter(function(value){
//  return value > 0;

// });
// console.log(a);

// 12 misol

// let arr = [2,3,4,5,6];
// let a = arr.map(function(value){
//  return value * value;

// });
// console.log(a);

// 13 misol
// let arr = [1,2,3,4,-5,-6];
// let a = arr.some(function(value){
// return value < 0;

// });
// console.log(a);

// 14 misol
//   let arr =[1,2,3,-4,-5,-6];
//   let a = arr.every(function(value){
//   return value > 0;

// });
// console.log(a);

// 15 misol

// let arr = [1,2,3,4,5,6,7,8,9];
// let multipliedArray = arr.map(str => str * 3);
// let filteredArray = multipliedArray.filter(arg => arg > 10);
// console.log( filteredArray );

// forEach misollar

// 1 misol

// let arr = [1,2,3,4,5];
// let c = [];
//  arr.forEach(function(value){
// c.push(value * value);

// });
// console.log(c);

// 2 misol

// let arr = [-8, -9, -4, 5, 6, -7];
// let d = [];
// arr.forEach(function (value) {
//   if (value > 0) {
//     d.push(value);
//   }
// });
// console.log(d);

// 3 misol

// let arr = [1,2,3,4,5];
// let c = [];
//  arr.forEach(function(value){
// c.push(value * 2);

// });
// console.log(c);

// 4 misol

// let arr = [2,4,6,8,10];
// let sum = 0;
// let a = arr.forEach(function(value){
//  sum = sum + value
//  return sum;

// });
// console.log(sum);

// filter misollar

// 1 misol

// let arr = [-5,-8,5,4,-10];
// let a = arr.filter(function(value){
//  return value > 0;
// });

// console.log(a);

// 2 misol

// let arr = [1,2,3,4,5,6,7,8,9];

// let a = arr.filter(function(value){
//  if( value % 2 == 0){
//   return value
// }

// });
// console.log(a);

// 3 misol
//  let arr = ['olma','banan','apilsin','madarin','behi'];
//  let filteredArray = arr.filter(str => str.length < 5);
//  console.log(filteredArray);
// 4 misol

//  let arr = [1,8,9,18,30,20,99];
//  let a = arr.filter(function(value){
//   return value > 18 && value < 100;
// });
// console.log(a);


// map misollar

// 1 misol

// let arr = [2,3,4,5,6];
// let a = arr.map(function(value){
//  return value * value;

// });
// console.log(a);

// 2 misol

// let arr = [1,2,3,4,5];
// let a = arr.map(function(value){

//   return value + 5;


// });
// console.log(a);

// 3 misol
//  let arr = ['olma','banan','apilsin','madarin','behi'];
//  let upperCaseArray = arr.map(str => str.toUpperCase ());
//  console.log(upperCaseArray);

// 4 misol
let arr = [1, 4, 9, 16, 25];
let a = arr.map(Math.sqrt);
console.log(a);


// every , some misollar

// 1 misol
//  let arr = [1,2,3,-4,-5,-6,];
//  let a = arr.some(function(value){
//   return value;

// });
// console.log(a);

// 2 misol


// 3 misol
//  let arr = [1,2,3,-4,-5,-6,];
//  let a = arr.every(function(value){
//   return value;

// });
// console.log(a);

// 4 misol

//  let arr = ['murodbek','Elyor','Ozodbek'];
//  let a = arr.every(function(value){
//   return value;

// });
// console.log(a);


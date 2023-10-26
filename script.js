// let text = "Hi,how are you?";
// let word = "";
// function includes(text, word) {
//   let newTxt = text.split(" ");
//   for (let i = 0; i < newTxt.length; i++) {
//     if (newTxt[i] === word) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes(text, "are"));

// task 12
// let num = 234;
// function separatedNum(num) {
//   let strNum = num.toString();
//   let newNum = strNum.split("");
//   return newNum;
// }
// console.log(separatedNum(num));
// task 13
// function FindMax(num) {
//   num = num.toString();
//   let maxNum = num[0];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > maxNum) {
//       maxNum = num[i];
//     }
//   }
//   return parseInt(maxNum);
// }
// console.log(FindMax(23173));
// task 14
// function FindMin(num) {
//   num = num.toString();
//   let minNum = num[0];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] < minNum) {
//       minNum = num[i];
//     }
//   }
//   return parseInt(minNum);
// }
// console.log(FindMin(2873));
// task 15
// const arr = [5, 3, 8, 11, 23, 9, 2];
// function FindArrNum(array) {
//   let sum = 0;
//   let product = 1;
//   let average = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     product *= array[i];
//     average = sum / array.length;
//   }
//   return console.log(`Sum -${sum},product -${product},average-${average}`);
// }
// console.log(FindArrNum(arr));
// task 16
// function findDividers(num) {
//   let dividers = [];
//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       dividers.push(i);
//     }
//   }
//   return dividers;
// }
// console.log(findDividers(16));
// task 17
// function findDividers(num) {
//   let count = 0;
//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(findDividers(16));
// task 18
// function findSumProduct(num) {
//   let sum = 0;
//   let product = 1;
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       arr.push(i);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     product *= arr[i];
//   }
//   return console.log(`sum-${sum} product -${product}`);
// }
// console.log(findSumProduct(16));
// task 20
// function PrimeOrCopmosite(num) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return `${num} is composite `;
//     }
//   }
//   if (isPrime) {
//     return `${num} is prime`;
//   }
// }
// console.log(PrimeOrCopmosite(16));
// task 21
// function findPrimes(...params) {
//   let arr = [];
//   for (let i = 0; i < params.length; i++) {
//     let isPrime = true;
//     for (let index = 2; index < params[i]; index++) {
//       if (params[i] % index === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime && params[i] !== 1) {
//       arr.push(params[i]);
//     }
//   }
//   return arr.map(Number);
// }
// console.log(findPrimes(8, 9, 1, 20, 17, 13, 29, 11, 16, 18));

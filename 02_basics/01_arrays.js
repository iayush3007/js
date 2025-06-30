// array
const myArr = [1,2,3,4,5]
const myHeroes = ["Batman", "Superman"]

const myArr2 = new Array(1,2,3,4,5)

// Array Methods
myArr.push(6);
myArr.push(16);
myArr.pop();
//myArr.unshift(9)
//myArr.shift()
console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

//slice, splice
const originalArray = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(2, 2, 6, 7); // Removes 2 elements from index 2, then adds 6 and 7
console.log(removedElements); // Output: [3, 4] (returns the removed elements)
console.log(originalArray); // Output: [1, 2, 6, 7, 5] (original array is modified)

//Use slice() when you need to create a new array from a portion of an
//existing array without altering the original. Use splice() when you
//need to modify the original array by adding, removing, or replacing elements. 
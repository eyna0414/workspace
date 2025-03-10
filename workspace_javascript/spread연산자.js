
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [1, 2, 3, ...arr2];

//[1, 2, 3, 4, 5]
//arr1[5] = arr2; X
//arr1.push(arr2); X


const person = {
  name: 'kim',
  age : 20
};

const score = {
  korScore : 80,
  mathScore : 100
};

const student = {
  ...person,
  ...score
};
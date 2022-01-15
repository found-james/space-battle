
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 
'jumps', 'over', 'the', 'lazy', 'dog'];

console.log(nums.every(nums => nums > -1));//every
console.log(panagram.every(word => word.length < 8));

console.log(nums.filter(num => num < 4));//filter
console.log(panagram.filter(word => word.length % 2 === 0));

console.log(nums.find(num => num % 5 === 0)); //find
console.log(panagram.find(word => word.length > 5));

console.log(nums.findIndex(num => num % 3 === 0)); //findIndex
console.log(panagram.findIndex(word => word < 2));//console logs -1 just like .indexOf() if it is not in the array
  
nums.forEach((item)=> {
    console.log(item * 3);
    });

panagram.forEach(word => console.log(`${word}!`));
panagram.forEach(word => console.log(word +"!")); 









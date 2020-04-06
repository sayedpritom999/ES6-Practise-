const nums = [1,2,3,4,5,6,7,8,9];
// const part = nums.slice(0,5);


const removed = nums.splice(0,5, 99, 100)
// console.log(nums);
// console.log(removed);

const together = nums.join("  ");

console.log(together);
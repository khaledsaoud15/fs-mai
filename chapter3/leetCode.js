// const filterArr = (arr, fn) => {
//   const filtered = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       filtered.push(arr[i]);
//     }
//   }

//   return filtered;
// };

// console.log(filterArr([10, 25, 30, 1, 45]));
// console.log(filterArr([1, 2, 3, 10, 15]));

const chunkArr = (arr, size) => {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  return chunked;

  return chunked;
};

console.log(chunkArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

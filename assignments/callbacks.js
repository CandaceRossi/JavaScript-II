// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
    return cb(arr.length);
}
getLength(items, function(first) {
    console.log(first);
});

//last passes the last item of the array into the callback.
const last = (currenValue, cb) => {
    for (let i = 0; i < items.length; i++) {
        cb(items[3]);
    }
};
last(items, function(item, index) {
    console.log(item, index);
});
// sumNums adds two numbers (x, y) and passes the result to the callback.
const sumNums = (x, y, cb) => {
    cb(x + y);
}
sumNums(2, 3, function(sum) {
    console.log(sum);
});

// multiplyNums multiplies two numbers and passes the result to the callback.
const multiplyNums = (x, y, cb) => {
    cb(x * y);
}
multiplyNums(2, 3, function(product) {
    console.log(product);
});

const contains = (item, list, cb) => {
    if (item === "yo-yo") {
        return true;
    } else {
        return false;
    }
}

console.log(contains);
// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
}
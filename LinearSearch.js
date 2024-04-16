// Linear Search

let arr = [56, 234, 324, 43, 535, 6, 8, 67, 85, 634, 4, 346, 6, 4, 5656, 786, 8, 566, 34, 3, 4, 54658, 9, 84, 354, 233, 2346, 78, 54654]

let searchValue = 12;
let index = -1; // if element not found
let count = 0;
for (let ind = 0; ind < arr.length; ind++) {
    count++;
    if (arr[ind] === searchValue) {
        index = ind;
        break;
    }
}
console.log(index, count);

// Time Complexity is O(n)

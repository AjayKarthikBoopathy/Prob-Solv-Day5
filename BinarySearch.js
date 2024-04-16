// Binary Search

const binarySearch = (arr, search) => {
    let start = 0;
    let end = arr.length - 1;
    let count = 0
    while (start <= end) {
        count++
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === search) {
            return mid;
        } else if (arr[mid] > search) {
            end = mid - 1;
        }
        else if (arr[mid] < search) {
            start = mid + 1;
        }
    }
    console.log(count)
    return -1; // if element not found
}

let arr = [ 3, 4, 4, 6, 7, 8, 8, 9, 34, 43, 56, 67, 78, 84, 85, 233, 234, 324, 346, 354, 535, 566, 634, 786, 2346, 5656, 54654, 54658 ];

let searchValue1 = 7;
let searchValue2 = 43;
let searchValue3 = 786;
let searchValue4 = 500000;

console.log(searchValue1, binarySearch(arr, searchValue1))
console.log(searchValue2, binarySearch(arr, searchValue2))
console.log(searchValue3, binarySearch(arr, searchValue3))
console.log(searchValue4, binarySearch(arr, searchValue4)) // Not Present

// Time Complexity is O(logn)

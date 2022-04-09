# In this Kata, your function receives an array of integers 
# as input. Your task is to determine whether the numbers 
# are in ascending order. An array is said to be in 
# ascending order if there are no two adjacent integers 
# where the left integer exceeds the right integer in value.



function inAscOrder(arr) {
  for(let i = 0; i < arr.length -1; i++) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  
  return true;
  
}


# inAscOrder([1,2,4,7,19]); // returns true
# inAscOrder([1,2,3,4,5]); // returns true
# inAscOrder([1,6,10,18,2,4,20]); // returns false
# inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
 
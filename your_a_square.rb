
# Given an integral number, determine if it's a square number:

# In mathematics, a square number or perfect square 
# is an integer that is the square of an integer; 
# in other words, it is the product of some 
# integer with itself.

var isSquare = function(n){
  if(n < 0 ) {
    return false 
  }
  
  if (Number.isInteger(Math.sqrt(n))) {
    return true
  }else {
    return false 
  }
  
  
}


# -1  =>  false
#  0  =>  true
#  3  =>  false
#  4  =>  true
# 25  =>  true
# 26  =>  false
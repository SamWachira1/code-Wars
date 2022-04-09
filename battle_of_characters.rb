
# Create a function that will accept 2 strings and return the one who's stronger


# Rules:

# Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
# Strings will consist of uppercase letters only
# Only two groups to a fight.
# Group whose total power (A + B + C + ...) is bigger wins.
# If the powers are equal, it's a tie.


function battle(x, y) {

  var xs = x.split("")
  var ys = y.split("")
  var a = 0
  var b = 0
  
    for(var i=0;i<x.length;i++){
    a+=(xs[i].charCodeAt() - 64)
    }
    
    for(var j=0;j<y.length;j++){
    b+=(ys[j].charCodeAt() - 64)
    }
    
    if(a>b) return x
    if(a==b) return "Tie!"
    return y
}

# battle("ONE", "TWO"); // => "TWO"`
# battle("ONE", "NEO"); // => "Tie!"
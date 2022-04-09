// # Task:

// # You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

// # Examples:

// # grid(4)

// # a b c d
// # b c d e
// # c d e f
// # d e f g


// # grid(10)

// # a b c d e f g h i j
// # b c d e f g h i j k
// # c d e f g h i j k l
// # d e f g h i j k l m
// # e f g h i j k l m n
// # f g h i j k l m n o
// # g h i j k l m n o p
// # h i j k l m n o p q
// # i j k l m n o p q r
// # j k l m n o p q r s





function grid(N) {

  const codeA = 'a'.charCodeAt()
  if (N < 0 ) return null; 
  let grid = []
  for(row = 0; row < N; row++) {
    let cell = []
    for(col = 0; col < N; col++ ) {
      cell.push(String.fromCharCode(codeA + (row + col) % 26) );
    }

    grid.push(cell.join(" "));
  }

  return grid.join('\n')
}
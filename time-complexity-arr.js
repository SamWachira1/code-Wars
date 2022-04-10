// Fastest O(1)


// Unique array
Array.prototype.uniq = function () {
    let uniqArray = {};


    this.forEach(function (v) {
        uniqArray[v + '::' + typeof v] = v;
    });

    return Object.keys(uniqArray).map(function (v) {
        return uniqArray[v];
    });
}

// Quadratic time booo! :( 
Array.prototype.twoSum = function () {
    const pairs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = (i + 1); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
}


// // This time we've reduced the time complexity from N^2 to N
// by using a hash

Array.prototype.twoSum2 = function () {
    let pairs = [];
    const indexHash = {};

    this.forEach((ele, indx) => {
        if (indexHash[ele * -1]) {
            const newPairs = indexHash[ele * -1].map((prevIdx) => [prevIdx, indx]);

            pairs = pairs.concat(newPairs);
        }

        indexHash[ele] ? indexHash[ele].push(indx) : indexHash[ele] = [indx];
    });


    return pairs;

}
let tester = [1, 2, 3, 4, -4, 5, 6, 7, -7];

Array.prototype.transpose = function () {
    const columns = Array.from({ length: this[0].length },
        () => Array.from({ length: this.length })
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j];
        }
    }

    return columns;

};

let tester = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
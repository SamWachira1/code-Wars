// Straight Recursion must go in anki 

function range(start, end) {
    if (start === end) {
        return [];
    }

    let r = range(start, end - 1);
    r.push(end - 1);
    return r;

}

range(3, 11);

function sumRec(arr) {
    if (arr.length == 0) {
        return 0;
    }

    let lastNum = arr[arr.length - 1];
    return sumRec(arr.slice(0, arr.length - 1)) + lastNum;

}

sumRec([1, 3, 3, 4, 5]);


function eXponent(base, exp) {
    return (exp === 0) ? 1 : base * eXponent(base, exp - 1);
}

console.log(eXponent(3, 0));
console.log(eXponent(2, 4));


function fibonacci(n) {
    if (n < 3) {
        return [0, 1].slice(0, n);
    }
    let fibs = fibonacci(n - 1);

    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;
}

function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }

    return arr.map((ele) => {
        return deepDup(ele);
    });

}

const array = [1, 2, 3, 4]
let duppedArray = deepDup(array);
duppedArray.push(10);


function bSearch(arr, target) {
    if (arr.length < 1) {
        return -1;
    }
    let midIndex = Math.floor(arr.length / 2);
    let probe = arr[midIndex];

    if (target === probe) {
        return midIndex;
    } else if (target < probe) {
        let left = arr.slice(0, midIndex);
        return bSearch(left, target);
    } else {
        let right = arr.slice(midIndex + 1);
        return bSearch(right, target) + (midIndex + 1);
    }
}

bSearch([1, 2, 3, 9], 9);



function merge(left, right) {
    let merged = []
    while (left.length > 0 && right.length > 0) {
        let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
        merged.push(nextItem);
    }

    return merged.concat(left, right);
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const midPoint = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, midPoint));
        const right = mergeSort(arr.slice(midPoint));

        return merge(left, right);

    }

}
console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);

function subSets(arr) {
    if (arr.length === 0) {
        return [[]];
    }
    // remember, we don't want to mutate the subsets without the first element
    // hence, the 'concat'

    const first = arr[0];
    const withoutFirst = subSets(arr.slice(1));

    const withFirst = withoutFirst.map(sub => [first].concat(sub));
    return withoutFirst.concat(withFirst);


}

console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subSets([1, 3, 5]))}`);

Array.prototype.bubbleSort = function () {
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < (this.length - 1); i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                isSorted = false;
            }
        }
    }

    return this;
};

console.log([5, 3, 4, 2, 1].bubbleSort());


String.prototype.substrings = function () {
    let subStrings = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            subStrings.push(this.slice(i, j));
        }
    }

    return subStrings;
}

console.log('hello'.substring());






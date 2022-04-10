const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

NUMS.myEach((num) => {
    console.log(`the square of ${num} is ${num * num}`);
});



Array.prototype.myMap = function (func) {
    const newArr = [];
    this.myEach((ele) => {
        newArr.push(func(ele));
    })

    return newArr;
}

NUMS.myMap((num) => {
    console.log(`the ${num} cubed is: ${num ** 3}`);
});


Array.prototype.myReduce = function (func, initialVal) {
    let arr = this;

    if (initialVal === undefined) {
        initialVal = this[0];
        arr = arr.slice(1);
    }

    let result = initialVal;

    arr.myEach(el => result = func(result, el));
    return result;
};


console.log(NUMS.myReduce((acc, el) => acc + el, 0));

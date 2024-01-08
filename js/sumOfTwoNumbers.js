function sumOfNumbers(...args) {
    const n = args.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sumOfNumbers(1, 2, 3, 1)) // 7

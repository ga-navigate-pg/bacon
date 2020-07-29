let sum = (a, b) => {
    return a + b;
}

let rest = (a, b) => {
    return a - b;
}
let divide = (a, b) => {
    if (!Number(a)) {
        console.log(` 'a' is not a number `);
    }
    if (b === 0) {
        console.log(`Can't divide by 0`);
        return;
    } else {
        return a / b;
    }
}
module.exports = {
    sum,
    rest,
    divide
}
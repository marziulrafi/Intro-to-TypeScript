// Arrow function & Normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addArrow(43, 235))
console.log(addNormal(734, 21))
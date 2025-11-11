// Arrow function & Normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addArrow(43, 235))
console.log(addNormal(734, 21))




// Object -> Function -> Method

const user = {
    name: "Marziul",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};

user.addBalance(100000);



const arr: number[] = [1, 4, 6];
const sqrArray = arr.map((el: number): number => el * el);
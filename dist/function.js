"use strict";
// Arrow function & Normal function
Object.defineProperty(exports, "__esModule", { value: true });
function addNormal(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(43, 235));
console.log(addNormal(734, 21));
// Object -> Function -> Method
const user = {
    name: "Marziul",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
user.addBalance(100000);
const arr = [1, 4, 6];
const sqrArray = arr.map((el) => el * el);
//# sourceMappingURL=function.js.map
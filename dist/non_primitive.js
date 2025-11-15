"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let bazarList = ["eggs", "milk", "sugar"];
// bazarList.push(true) ❌
let mixedArr = ["eggs", 12, "milk", 1, "sugar", 2]; //implicit
mixedArr.push(546);
//Tuple
let coordinates = [20, 30, 50];
let couple = ["Husband", "wife"];
let destination = ["Dhaka", "Chattogram", 3];
// reference type : Object
const user = {
    firstName: "Marziul",
    lastName: "Rafi",
    nickname: "Rafi",
    family: "Khondaker",
    isMarried: false,
};
// user.nickname = 'Karim' (Not changable)
// user.family = 'Khondaker!!' (Not changable)
user.lastName = 'Karim';
console.log(user);
//# sourceMappingURL=non_primitive.js.map
let bazarList: string[] = ["eggs", "milk", "sugar"];
// bazarList.push(true) ❌


let mixedArr = ["eggs", 12, "milk", 1, "sugar", 2]; //implicit
mixedArr.push(546);


//Tuple

let coordinates: [number, number] = [20, 30, 50];
let couple: [string, string] = ["Husband", "wife"];
let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];



// reference type : Object

const user: {
    firstName: string;
    middleName?: string; // optional type
    lastName: string
    readonly nickname: string; // access modifier
    family: "Khondaker" // value -> type [Literal type]
    isMarried: boolean
} = {
    firstName: "Marziul",
    lastName: "Rafi",
    nickname: "Rafi",
    family: "Khondaker",
    isMarried: false,
};



// user.nickname = 'Karim' (Not changable)
// user.family = 'Khondaker!!' (Not changable)



user.lastName = 'Karim'
console.log(user);
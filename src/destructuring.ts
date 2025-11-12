// Object Destructuring

const user = {
    id: 123,
    name: {
        firstName: "K M",
        middleName: "Marziul",
        lastName: "Karim",
    },
    gender: "male",
    favouriteColor: "black",
};

// const myFavouriteColor = user.favouriteColor
// const myMiddleName = user.name.middleName

const {
    favouriteColor,
    name: { middleName: myMiddleName },
} = user;

console.log(favouriteColor);
console.log(myMiddleName);




// Array Destructuring

const friends = ["Messi", "Suarez", "Neymar"];

const [my1stFriend] = friends;
const [, my2ndFriend] = friends;
const [, , my3rdFriend] = friends;

console.log(my1stFriend);
console.log(my2ndFriend);
console.log(my3rdFriend);
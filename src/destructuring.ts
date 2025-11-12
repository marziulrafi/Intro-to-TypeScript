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

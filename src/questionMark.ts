// ? : Ternary opearator : decision making
// ?? : Nullish Coalescing operator : null/undefined
// ?. Optional Chaining



// Ternary
const EligibleForMarriage = (age: number) => {
    const result = age >= 21 ? "You are eligible" : "You are not eligible !";

    console.log(result);
};

EligibleForMarriage(21);


// Nullish Coalescing
const userTheme = "Green theme";
const selectedTheme = userTheme ?? "Light theme";
console.log(selectedTheme);


const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";


const resultWithNullish = isAuthenticated ?? '"You are guest !';

console.log({ resultWithTernary }, { resultWithNullish });



//Optional Chaining

const user: {
    address: {
        city: string;
        town: string;
        postalCode?: string;
    };
} = {
    address: {
        city: "Dhaka",
        town: "Banani",
    },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
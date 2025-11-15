"use strict";
// ? : Ternary opearator : decision making
// ?? : Nullish Coalescing operator : null/undefined
// ?. Optional Chaining
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// Ternary
const EligibleForMarriage = (age) => {
    const result = age >= 21 ? "You are eligible" : "You are not eligible !";
    console.log(result);
};
EligibleForMarriage(21);
// Nullish Coalescing
// const userTheme = "Green theme";
const userTheme = undefined;
const selectedTheme = userTheme !== null && userTheme !== void 0 ? userTheme : "Light theme";
console.log(selectedTheme);
// const isAuthenticated = "";
const isAuthenticated = null;
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";
const resultWithNullish = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : '"You are guest !';
console.log({ resultWithTernary }, { resultWithNullish });
//Optional Chaining
const user = {
    address: {
        city: "Dhaka",
        town: "Banani",
    },
};
const postalCode = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.postalCode;
console.log(postalCode);
//# sourceMappingURL=questionMark.js.map
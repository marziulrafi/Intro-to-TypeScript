"use strict";
// Spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Rahim", "Karim"];
const schoolFriends = ["Hasan", "Hossain"];
const collegeFriends = ["Messi", "Suarez"];
friends.push(...schoolFriends);
friends.push(...collegeFriends);
console.log(friends);
const user = { name: "Marziul", phoneNo: "01500000000" };
const otherInfo = { hobby: "outing", favouriteColor: "Black" };
const userInfo = Object.assign(Object.assign({}, user), otherInfo);
console.log(userInfo);
// Rest opeartor
const sendInvite = (...friends) => {
    friends.forEach((friend) => console.log(`Send invitation to ${friend}`));
};
sendInvite("Karim", "Messi");
//# sourceMappingURL=spread_rest.js.map
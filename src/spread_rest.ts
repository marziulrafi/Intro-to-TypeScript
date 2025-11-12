// Spread operator

const friends = ["Rahim", "Karim"];
const schoolFriends = ["Hasan", "Hossain"];

const collegeFriends = ["Messi", "Suarez"];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);



const user = { name: "Marziul", phoneNo: "01500000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);


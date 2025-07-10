"use strict";
const User = {
    id: 1,
    name: "Ali bin Abu",
    age: 20,
    address: "No 10, Jalan x, Bandar x",
    greet(message) {
        console.log(message);
    }
};
const User2 = {
    id: 2,
    name: "Abu bin Ali",
    age: 30,
};
if (!User.address) {
    console.log("No address");
}
else {
    console.log(User.address);
}

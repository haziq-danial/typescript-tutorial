interface UserInterface {
    id:number;
    name:string;
    age:number;
    address?:string; // optional field
    // function field
    greet?(message:string): void;
}

const User: UserInterface = {
    id: 1,
    name: "Ali bin Abu",
    age: 20,
    address: "No 10, Jalan x, Bandar x",
    greet(message) {
        console.log(message);
    }
};

const User2: UserInterface = {
    id: 2,
    name: "Abu bin Ali",
    age: 30,
};

// conditional example
if (!User.address) {
    console.log("No address");
} else {
    console.log(User.address);
}
"use strict";
const printID = (id) => {
    console.log("ID: " + id);
};
const signContract = (employee) => {
    console.log("Contract signed by: " + employee.name + " with email: " + employee.email);
};
signContract({ name: "Ali bin Abu", creditScore: 900, email: "ali@gmail.com", id: 20 });

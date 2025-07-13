
// set a custom type
type IDFieldTypes = string | number;

// union types
const printID = (id: IDFieldTypes) => {
    console.log("ID: " + id);
};

// printID(1212121221212);

// unions & intersect for interfaces
interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string;
}

type Employee = UserIdentity & BusinessPartner;
// type Employee = UserIdentity | BusinessPartner; for unions

const signContract = (employee: Employee): void => {
    console.log("Contract signed by: " + employee.name + " with email: " + employee.email);
};

signContract({ name: "Ali bin Abu", creditScore: 900, email: "ali@gmail.com", id: 20 });


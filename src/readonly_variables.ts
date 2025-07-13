// readonly makes the data immutable
interface EmployeeInterface {
    readonly employeeID: number;
    readonly startDate: Date;

    name: string;
    department: string;
}

const employee: EmployeeInterface = {
    employeeID: 0,
    startDate: new Date(),
    name: "",
    department: ""
};
// Union (|)

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "Admin Dashboard";
    } else if (role === "user") {
        return "User dashboard";
    } else {
        return "Guest dashboard";
    }
};

getDashboard("guest");




// Intersection (&)

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const Khondaker: EmployeeManager = {
    id: "123",
    name: "Khondaker Marziul",
    phoneNo: "017",
    designation: "manager",
    teamSize: 20,
};
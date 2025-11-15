"use strict";
// Union (|)
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User dashboard";
    }
    else {
        return "Guest dashboard";
    }
};
getDashboard("guest");
const Khondaker = {
    id: "123",
    name: "Khondaker Marziul",
    phoneNo: "017",
    designation: "manager",
    teamSize: 20,
};
//# sourceMappingURL=union_intersection.js.map
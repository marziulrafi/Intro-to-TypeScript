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

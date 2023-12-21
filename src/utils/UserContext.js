import { createContext } from "react";

const UserContext = createContext({
    name: "Dummy Name",
    email: "dummy@gmail.com",
});

UserContext.displayName = "UserContext";

export default UserContext;

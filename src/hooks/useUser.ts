import { createContext, useContext } from "react";

export type User = {
    username: string;
    role: "Admin" | "User";
}

export const DashboardContext = createContext<User | undefined>(undefined);

export const useUser = () => {
    const user = useContext(DashboardContext);

    if (!user) throw new Error("No context for the user.");

    return user;
}
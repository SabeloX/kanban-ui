import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { TicketType } from "../pages/dashboard/components/category/Category";

export type User = {
    username: string;
    role: "Admin" | "User";
}

export type DashboardContextType = {
    user: User;
    tickets: TicketType[];
    setTickets: Dispatch<SetStateAction<TicketType[]>>
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboardContext = () => {
    const context = useContext(DashboardContext);

    if (!context) throw new Error("No context found.");

    return context;
}
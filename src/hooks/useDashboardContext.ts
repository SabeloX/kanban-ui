import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { TicketType } from "../pages/dashboard/components/category/Category";

/**
 * Represents a user with a username and role.
 * @typedef {object} User
 * @property {string} username - The username of the user.
 * @property {"Admin" | "User"} role - The role of the user.
 */
export type User = {
    username: string;
    role: "Admin" | "User";
}

/**
 * Represents the context for the dashboard, including user information and tickets.
 * @typedef {object} DashboardContextType
 * @property {User} user - The user's information.
 * @property {TicketType[]} tickets - An array of tickets.
 * @property {Dispatch<SetStateAction<TicketType[]>>} setTickets - A function to set the tickets.
 */
export type DashboardContextType = {
    user: User;
    tickets: TicketType[];
    setTickets: Dispatch<SetStateAction<TicketType[]>>
}

/**
 * A context to provide dashboard-related data to components.
 * @type {React.Context<DashboardContextType | undefined>}
 */
export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

/**
 * A custom hook to access the dashboard context.
 * @returns {DashboardContextType} The dashboard context.
 * @throws {Error} Throws an error if the context is not found.
 */
export const useDashboardContext = () => {
    const context = useContext(DashboardContext);

    if (!context) throw new Error("No context found.");

    return context;
}
import { Button } from "../../../../components/button/Button";
import { useDashboardContext } from "../../../../hooks/useDashboardContext";
import { Ticket } from "../ticket/Ticket";
import "./category.css";
import { v4 } from "uuid";

/**
 * Represents the possible categories for tickets.
 * @typedef {"To-Do" | "In Progress" | "Done"} CategoryType
 */
export type CategoryType = "To-Do" | "In Progress" | "Done";

/**
 * Represents the structure of a ticket.
 * @property {string} id - The unique identifier for the ticket.
 * @property {string} title - The title of the ticket.
 * @property {CategoryType} status - The category/status of the ticket.
 * @property {string} [description] - An optional description for the ticket.
 * @property {string} [assignee] - An optional assignee for the ticket.
 */
export type TicketType = {
    id: string;
    title: string;
    status: CategoryType;
    description?: string;
    assignee?: string;
}

/**
 * Props for the Category component.
 * @interface CategoryProps
 * @property {CategoryType} heading - The category heading.
 * @property {TicketType[]} tickets - An array of tickets within this category.
 */
interface CategoryProps {
    heading: CategoryType;
    tickets: TicketType[];
}

/**
 * The Category component displays a category of tickets on a kanban board.
 * @param {CategoryProps} props - The properties of the Category component.
 * @returns {JSX.Element} The Category component JSX.
 */
export const Category = ({ heading, tickets }: CategoryProps) => {
    const context = useDashboardContext();

    const addTicket = () => {
        const newTicket: TicketType = {
            title: "No title",
            status: heading,
            id: v4()
        }
        context.setTickets([...context.tickets, newTicket])
    }
    return (
        <div className="kanbanBoard__container">
            <h2 className="kanbanBoard__heading">{heading}</h2>
            {
                tickets.map((ticket, index) => (
                    <Ticket ticket={ticket} key={index}/>
                ))
            }
            {
                context.user.role === "Admin" &&
                <div className="kanbanBoard__button__container">
                    <Button onClick={addTicket} className="kanbanBoard__button">Add ticket</Button>
                </div>
            }
        </div>
    )
}
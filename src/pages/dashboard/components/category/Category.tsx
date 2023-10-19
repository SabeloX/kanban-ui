import { Button } from "../../../../components/button/Button";
import { useDashboardContext } from "../../../../hooks/useDashboardContext";
import { Ticket } from "../ticket/Ticket";
import "./category.css";

export type CategoryType = "To-Do" | "In Progress" | "Done";

export type TicketType = {
    title: string;
    status: CategoryType;
    description?: string;
    assignee?: string;
}

interface CategoryProps {
    heading: CategoryType;
    tickets: TicketType[];
}

export const Category = ({ heading, tickets }: CategoryProps) => {
    const context = useDashboardContext();

    const addTicket = () => {
        const newTicket: TicketType = {
            title: "No title",
            status: heading
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
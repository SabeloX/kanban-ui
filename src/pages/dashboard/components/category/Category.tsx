import { Button } from "../../../../components/button/Button";
import { useUser } from "../../../../hooks/useUser";
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
    const user = useUser();

    return (
        <div className="kanbanBoard__container">
            <h2 className="kanbanBoard__heading">{heading}</h2>
            {
                tickets.map((ticket, index) => (
                    <Ticket ticket={ticket} key={index}/>
                ))
            }
            {
                user.role === "Admin" &&
                <div className="kanbanBoard__button__container">
                    <Button className="kanbanBoard__button">Add ticket</Button>
                </div>
            }
        </div>
    )
}
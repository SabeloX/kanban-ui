import { TicketType } from "../category/Category"
import "./ticket.css";
import editIcon from "../../../../assets/icons/edit.svg";
import userIcon from "../../../../assets/icons/user.svg";
import { useDashboardContext } from "../../../../hooks/useDashboardContext";

interface TicketProps {
    ticket: TicketType;
}

export const Ticket = ({ ticket }: TicketProps) => {
    const { user } = useDashboardContext();

    return (
        <div className="ticket__container">
            {user.role === "Admin" && <img className="icon edit__icon" src={editIcon} alt="edit" />}
            <h3>{ticket.title}</h3> 
            {ticket.description && <p>{ticket.description}</p>}
            {
                ticket.assignee &&
                <div className="ticket__assignee">
                    <img className="icon" src={userIcon} alt="assignee" />
                    <p>{ticket.assignee}</p>
                </div>
            }
        </div>
    )
}
import { CategoryType, TicketType } from "../category/Category"
import "./ticket.css";
import editIcon from "../../../../assets/icons/edit.svg";
import userIcon from "../../../../assets/icons/user.svg";
import doneIcon from "../../../../assets/icons/done.svg";
import { useDashboardContext } from "../../../../hooks/useDashboardContext";
import { useState } from "react";
import { categories } from "../../Dashboard";

interface TicketProps {
    ticket: TicketType;
}

/**
 * The Ticket component displays information about a specific ticket.
 * @param {TicketProps} props - The properties of the Ticket component.
 * @returns {JSX.Element} The Ticket component JSX.
 */
export const Ticket = ({ ticket }: TicketProps) => {
    const { user, setTickets, tickets } = useDashboardContext();
    const [edit, setEdit] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(ticket.title);
    const [description, setDescription] = useState<string | undefined>(ticket.description);
    const [assignee, setAssignee] = useState<string | undefined>(ticket.assignee);
    const [status, setStatus] = useState<CategoryType>(ticket.status);

    /**
     * Edit the ticket and update the ticket list.
     */
    const editTicket = () => {
        const updatesTicketList = tickets.map(item => {
            if (item.id === ticket.id) {
                return {
                    id: ticket.id,
                    title,
                    description,
                    status,
                    assignee
                }
            }
            return item;
        });
        setTickets(updatesTicketList);
        setEdit(edit => !edit);
    }

    return (
        <div className="ticket__container">
            <img onClick={editTicket} className="icon edit__icon" src={edit ? doneIcon : editIcon} alt="edit" />
            {
                (!edit) ?
                    <>
                        <h3>{ticket.title}</h3> 
                        {ticket.description && <p>{ticket.description}</p>}
                        {
                            ticket.assignee &&
                            <div className="ticket__assignee">
                                <img className="icon" src={userIcon} alt="assignee" />
                                <p>{ticket.assignee}</p>
                            </div>
                        }
                    </> :
                    <>
                        {
                            user.role === "Admin" ?
                                <>
                                    <input className="ticket__editInput" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
                                    <input className="ticket__editInput" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
                                    <p>Status:</p>
                                    <select name="status" onChange={(event) => setStatus(event.target.value as CategoryType)} className="ticket__select" placeholder="Role">
                                        {
                                            categories.map((item, index) => (
                                                <option key={index} selected={item === ticket.status} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </> :
                                <>
                                    <label htmlFor="assignee">Assignee</label>
                                    <input name="assignee" className="ticket__editInput" placeholder="Assignee" value={assignee} onChange={(event) => setAssignee(event.target.value)} />
                                </>
                        }
                    </>
            }
        </div>
    )
}
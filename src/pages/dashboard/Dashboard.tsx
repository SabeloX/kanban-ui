import { useState } from "react";
import "./dashboard.css";
import { Navigate, useLocation } from "react-router-dom";
import { Category, CategoryType, TicketType } from "./components/category/Category";
import { DashboardContext } from "../../hooks/useDashboardContext";

const categories = ["To-Do", "In Progress", "Done"];
const sampleTickets: TicketType[] = [
    {
        title: "Login page",
        status: "To-Do",
        description: "Develop the login page using TailwindCSS.",
        assignee: "SabeloX"
    },
    {
        title: "Login page",
        status: "To-Do",
        description: "Develop the login page using TailwindCSS.",
        assignee: "SabeloX"
    },
    {
        title: "Login page",
        status: "To-Do",
        description: "Develop the login page using TailwindCSS.",
        assignee: "SabeloX"
    },
    {
        title: "Login page",
        status: "To-Do",
        description: "Develop the login page using TailwindCSS.",
        assignee: "SabeloX"
    }
]

const Dashboard = () => {
    const location = useLocation();
    const user = location.state ? location.state.user : null;

    const [tickets, setTickets] = useState<TicketType[]>(sampleTickets);

    if (!user) {
        return <Navigate to="/login"/>
    }

    return (
        <DashboardContext.Provider value={{ user, tickets, setTickets }}>
            <div className="dashboard__container">
                <div className="dashboard__box">
                    {
                        categories.map((item, index) => (
                            <Category tickets={tickets.filter(ticket => ticket.status === item)} key={index} heading={item as CategoryType} />
                        ))
                    }
                </div>
            </div>
        </DashboardContext.Provider>
    )
}

export default Dashboard;
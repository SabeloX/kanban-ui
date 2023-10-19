import { useEffect, useState } from "react";
import "./dashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Category, CategoryType, TicketType } from "./components/category/Category";
import { DashboardContext } from "../../hooks/useUser";

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
    const { state } = useLocation();
    const user = state.user;
    const navigate = useNavigate();

    const [tickets, setTickets] = useState<TicketType[]>(sampleTickets);

    useEffect(() => {
        if (!user) navigate('/login');
    }, []);

    return (
        <DashboardContext.Provider value={user}>
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
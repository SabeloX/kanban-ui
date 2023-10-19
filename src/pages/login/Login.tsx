import { SyntheticEvent, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

type UserType = "Admin" | "User";

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [role, setRole] = useState<UserType | null>("Admin");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (username !== "" && role !== null) {
            setError(null);
            navigate('/', { state: { username, role } });
        }
        else {
            setError("Please enter your username and role.");
        }
    }

    return (
        <div className="login__container">
            <div className="login__box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="login__form">
                    <input onChange={(event) => setUsername(event.target.value)} className="login__input" placeholder="Username" />
                    <select onChange={(event) => setRole(event.target.value as UserType)} className="login__select" placeholder="Role">
                        <option className="login__option" value="Admin">Admin</option>
                        <option className="login__option" value="User">User</option>
                    </select>
                    { error && <p className="login__error">{ error }</p> }
                    <button className="login__submitButton" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
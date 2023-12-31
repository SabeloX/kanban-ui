import { SyntheticEvent, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";

/**
 * Represents the possible user roles for login.
 * @typedef {"Admin" | "User"} UserType
 */
type UserType = "Admin" | "User";

/**
 * The Login component handles user authentication.
 * @returns {JSX.Element} The Login component JSX.
 */
const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [role, setRole] = useState<UserType | null>("Admin");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    /**
     * Handle form submission and navigate to the main page if login is successful.
     * @param {SyntheticEvent} event - The form submission event.
     */
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (username !== "" && role !== null) {
            setError(null);
            navigate('/', { state: { user: { username, role }}});
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
                    <div className="login__role">
                        <label className="login__roleLabel" htmlFor="role">Role</label>
                        <select name="role" onChange={(event) => setRole(event.target.value as UserType)} className="login__select" placeholder="Role">
                            <option className="login__option" value="Admin">Admin</option>
                            <option className="login__option" value="User">User</option>
                        </select>
                    </div>
                    { error && <p className="login__error">{ error }</p> }
                    <Button className="login__submitButton" type="submit">Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;
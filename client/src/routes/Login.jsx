import '../../styles/login.css';
import {  useState } from 'react';
import { useAuth } from '../context/AuthProvider.jsx';

export default function Login() {
    const { login } = useAuth();
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [message,setMessage] = useState("");


    const loginUser = async (e) => {
        e.preventDefault();

        const response = await fetch('https://handle-hub.vercel.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:'include',
                body: JSON.stringify({ gmail, password })
            });

            const data = await response.json();
            setMessage(data.message);
            
            if (response.status === 200) {
                window.location.href = '/';

                const userData = { gmail , password};
                login(userData);
            }
    }

    return (
        <>
            <div className="loginDiv">
                <h1>Admin Login</h1>
                {message}
                <form className="loginForm" onSubmit={loginUser}>
                    <span className="loginInput">
                        <label htmlFor="gmail">Gmail</label>
                        <input id="gmail" type="text" className="designForForm" required onChange={(e => setGmail(e.target.value))}/>
                    </span>
                    <span className="loginInput">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="designForForm" required  onChange={(e => setPassword(e.target.value))}/>

                    </span>
                    <span className="loginSpan">
                        <button type="submit" id="loginButton">Login</button>
                    </span>
                </form>
            </div>
        </>
    )
}
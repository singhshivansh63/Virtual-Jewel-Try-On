import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/login", { email, password });
            alert(response.data.message);
        } catch (error) {
            alert("Login failed. Please try again.");
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="login-background">
            <div className="login-card">
                <h2 className="login-title">Welcome Back ✨</h2>
                <p className="login-subtext">Sign in to your virtual jewelry experience</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="login-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="login-input"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;


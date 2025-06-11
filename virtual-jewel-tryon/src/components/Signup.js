import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/signup", { email, password });
      if (res.data.success) {
        alert("Signup successful! You can now log in.");
        navigate("/login");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="signup-background">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account ✨</h2>
        <p className="signup-subtext">Join us and explore stunning jewelry virtually</p>
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
        <p className="signup-footer">
          Already have an account?{" "}
          <a href="/login" className="signup-link">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

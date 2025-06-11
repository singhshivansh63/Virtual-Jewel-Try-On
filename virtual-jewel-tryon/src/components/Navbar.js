import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const linkStyle = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#C59D5F", // Brown text
        padding: "8px 16px",
        borderRadius: "8px",
        transition: "background 0.3s",
    };

    const navStyle = {
        padding: "12px 24px",
        background: "#000", // black background
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    };

    const handleMouseOver = (e) => {
        e.currentTarget.style.background = "#333";
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.background = "transparent";
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Home
            </Link>
            <Link to="/login" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Login
            </Link>
            <Link to="/signup" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Signup
            </Link>
            <Link to="/TryOn" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                TryOn
            </Link>
            <Link to="/profile" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Profile
            </Link>
            <Link to="/wishlist" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Wishlist
            </Link>
            <Link to="/payments" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Payments
            </Link>
        </nav>
    );
}

export default Navbar;



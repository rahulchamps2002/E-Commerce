import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router for navigation
import './Header.css';  // Import the CSS file for styling

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');  // State to manage search input

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Logic to handle search action (e.g., redirect to a search results page)
        console.log('Searching for:', searchTerm);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo or Home Link */}
                <Link to="/" className="logo">
                    E-Commerce
                </Link>

                {/* Navigation Links and Search Bar */}
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/signup" className="nav-link">Sign Up</Link>

                    {/* Search Bar in Navigation Area */}
                    <form onSubmit={handleSearchSubmit} className="search-form">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                        <button type="submit" className="search-button">Search</button>
                    </form>
                </nav>
            </div>
        </header>
    );
};

export default Header;

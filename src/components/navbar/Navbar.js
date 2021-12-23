import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <h1 className="navbar-title">My Diary</h1>
                <ul className="navbar-list">
                    <a href="/" className="navbar-item" id="home">Home</a>
                    <a href="/create" className="navbar-item" id="create">Write an entry</a>
                </ul>
            </nav>
        </div>
    )
}

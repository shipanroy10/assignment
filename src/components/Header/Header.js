import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
           

            <div className="first">
            <h2>WELCOME TO ONLINE EDUCATION COURSES</h2>
                <h5>WE ARE HERE TO SUPPORT</h5>
            </div>
            <div className="second">
            <nav>
                <a href="/name">Name Of Courses</a>
                <a href="/detail">Detail or More Info</a>
                <a href="/contact">Contact</a>
            </nav>


            </div>
        </div>
    );
};

export default Header;
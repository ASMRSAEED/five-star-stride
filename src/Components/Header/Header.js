import React from 'react';
import CustomLink from '../Customlink/Customlink';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className='navigation'>
                <CustomLink className='nav-btn' to="/home">Home</CustomLink>
                <CustomLink className='nav-btn' to="/reviews" >Reviews</CustomLink>
                <CustomLink className='nav-btn' to="/dashboard" >Dashboard</CustomLink>
                <CustomLink className='nav-btn' to="/blogs" >Blogs</CustomLink>
                <CustomLink className='nav-btn' to="/about" >About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;
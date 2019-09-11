import React from 'react';
import { MdSettings } from 'react-icons/md';
import { MdInfo } from 'react-icons/md';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <h1>Fluxtune</h1>
            <div className="icon-list">
                <MdInfo className="icon" />
                <MdSettings className="icon" />
            </div>
        </nav>
    );
};

export default Nav;
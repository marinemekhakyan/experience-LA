import React from 'react';
import classes from './main.css';

const Nav = () => {
    return (
        <div className={classes.Container} >
            <nav>
                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">About</a></li>
                    <li><a href="contact.asp">Experience</a></li>
                    <li><a href="about.asp">Instructors</a></li>
                    <li><a href="about.asp">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav;
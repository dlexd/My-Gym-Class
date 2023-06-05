import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '../../utils/auth';

function Navbar() {

    function Navigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className='mx-1'>
                        <Link to="/exercise">
                            Exercise
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/nutrition">
                            Nutrition
                        </Link>
                    </li>
                    <li className="mx-1">
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header className="flex-row px-1">
            <h1>
                <Link to="/">
                    <span role="img" aria-label="fitness">🏋️‍♂️</span>
                    TEMPORARY NAME
                </Link>
            </h1>

            <nav>
                <Navigation />
            </nav>
        </header>
    );
}

export default Navbar;

    



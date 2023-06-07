import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Auth } from '../../utils/auth';

import logo from '../../assets/logo.jpg';

const Navbar = () => (

    function Navigation() {
        if (Auth.loggedIn()) {
            return (
                <Stack direction="row" justifyContent="space-around" sx={{ gap: {sm: '123px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
                    <Link to="/">
                        <img src={logo} alt="logo" style={{ width: '52px', height: '52px', margin: '0px 25px'}} />  
                    </Link>
                <Stack direction="row" gap="40px" fontFamily="Roboto" fontSize="32px" alignItems="flex-end"> 
       
                        <Link to="/exercise" style={{ textDecoration: 'none', color: '#2a90e3', borderBottom: '4px solid #2a62e3'}}>
                            Exercise
                        </Link>
                        <Link to="/nutrition" style={{ textDecoration: 'none', color: '#2a90e3', borderBottom: '4px solid #2a62e3'}}>
                            Nutrition
                        </Link>
                        <Link to="/subscrie" style={{ textDecoration: 'none', color: '#2a90e3', borderBottom: '4px solid #2a62e3'}}>
                            Subscribe for more!
                        </Link>
                        <a href="/" style={{ textDecoration: 'none', color: '#2a90e3', borderBottom: '4px solid #2a62e3'}} onClick={() => Auth.logout()}>
                            Logout
                        </a>
                </Stack>
            </Stack>
            );
        } else {
            return (
                <Stack direction="row" justifyContent="space-around" sx={{ gap: {sm: '123px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
                    <Link to="/">
                        <img src={Logo} alt="logo" style={{ width: '52px', height: '52px', margin: '0px 25px'}} />  
                    </Link>
                <Stack direction="row" gap="40px" fontFamily="Roboto" fontSize="32px" alignItems="flex-end"> 
       
                        <Link to="/signup" style={{ textDecoration: 'none', color: '#2a90e3', borderBottom: '4px solid #2a62e3'}}>
                            Signup
                        </Link>
                        <Link to="/login" style={{ textDecoration: 'none', color: '#2a90e3', borderBottom: '4px solid #2a62e3'}}>
                            login
                        </Link>
                </Stack>
            </Stack>
            );
        }
    }
);

export default Navbar;

    



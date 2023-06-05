import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Nutrition from './pages/nutrition';
import Exercise from './pages/exercise';

const app = () => {
  <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
    <Navbar />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/login" element={<Login />} />
      <Route path ="/signup" element={<Signup />} />
      <Route path ="/exercise/:id" element={<Exercise />} />
      <Route path ="/nutrition/:id" element={<Nutrition />} />
    </Routes>
    <Footer />
  </Box>
};

export default app;

import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Home from '../views/Home';

export const UserContext = createContext();

export default function AppRoute() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

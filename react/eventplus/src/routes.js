import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage  from './pages/LoginPage/LoginPage';

const routes = () => {
    return (
        <div>
            <BrowserRouter>
              <Route>
                <Route element={<HomePage/>} path={"/"} exact/>
                <Route element={<LoginPage/>} path={"/login"}/>
              </Route>
            </BrowserRouter>
        </div>
    );
};

export default routes;
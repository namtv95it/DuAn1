import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './page/home/Home';
import { Routes, Route, Link, useRoutes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MyfuncPage from './page/func-component/MyfuncPage';
import MyReduxPage from './page/redux-component/MyReduxPage';
import MyClassPage from './page/class-component/MyClassPage';
import Login from './page/auth/login/Login';
import Sockets from './page/socket/Sockets';
import { homeRouter } from './routers/homeRouter';

function App() {
  let router = useRoutes([
    homeRouter
  ])
  return (
    <div>
      {router}
    </div>
  );
}

export default App;

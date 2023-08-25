import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './page/home/Home';
import { Routes, Route, Link, useRoutes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sockets from './page/socket/Sockets';
import { homeRouter } from './routers/homeRouter';
import 'bootstrap-icons/font/bootstrap-icons.css';

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

import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { homeRouter } from './app/router/homeRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  let router = useRoutes([
    homeRouter
  ])
  return (
    <div>
      <Router>
        {router}
      </Router>
    </div>
  );
}

export default App;

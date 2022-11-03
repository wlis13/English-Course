import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstPage from './pages/firstPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ FirstPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

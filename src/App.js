import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentProvider from './context/StudentProvider';
import FirstPage from './pages/firstPage';
import Login from './pages/Login';
import SecondPage from './pages/secondPage';

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/page1" component={ FirstPage } />
          <Route exact path="/page2" component={ SecondPage } />
        </Switch>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;

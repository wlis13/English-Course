import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentProvider from './context/StudentProvider';
import FirstPage from './pages/firstPage';

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ FirstPage } />
        </Switch>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;

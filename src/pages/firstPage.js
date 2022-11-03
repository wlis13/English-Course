import React from 'react';
import ValuesOne from '../components/ValuesFirstPage';
import '../style.css';

function FirstPage() {
  return (
    <div className="container">
      <header>
        <h1>
          Apresentações // Presentation
        </h1>
      </header>
      <ValuesOne />
    </div >
  );
}

export default FirstPage;

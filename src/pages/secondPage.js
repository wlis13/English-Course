import React, { useState } from 'react';
import dates from '../util/Dates';
import { FaCheck } from 'react-icons/fa';
// import { FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

function SecondPage() {
  const audios = dates.filter((date) => date.audio !== null);
  const [inputValue, setInputValue] = useState({
    string: '',
    id: '',
  });

  const handleChange = ({ target }) => {
    const { value, id } = target;
    setInputValue((prevState) => ({ ...prevState, string: value, id: id }))
  };

  const verifyCheck = () => {
    if (inputValue.string === 'trophy-trophies' && inputValue.id === '0') {
      return true;
    }
    return false;
  };

  return (
    <div>
      <h2 className="header02">listen to the audio and type correctly <br /> ex: (Trophy-trophies)</h2>

      <div className="container02">
        { audios.map((audi, index) => (
          <div>
            <audio
              className="audio"
              id={ `audi${ index }` }
              src={ audi.audio }
              controls
            >
            </audio>
            <input
              className="input-value"
              onChange={ handleChange }
              id={ index }
              placeholder="digite a frase"
            />
          </div>
        )) }
      </div>
      { verifyCheck() && <FaCheck className="check01" /> }
      <div className="link-father">
        <Link className="link-page2" to="/page1">{ '<-Return' }</Link>
      </div>
    </div>
  );
}

export default SecondPage;
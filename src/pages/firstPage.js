import React, { useContext } from 'react';
import '../style.css';
import { FaCheck } from 'react-icons/fa'
import { FiX } from "react-icons/fi";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import Context from '../context/StudentContext';

function FirstPage() {
  const {
    questWoman,
    questMan,
    handleChangeValue,
    isCheck,
    handleSubmit,
  } = useContext(Context);

  return (
    <div className="container">
      <header>
        <h1>
          Apresentações // Presentation
        </h1>
      </header>
      <div>
        <section className="card">
          <div className="card-container">
            <img
              className="image"
              src={ image1 }
              alt="imagen do primeiro estudante"
            />
            <div className="card-question">
              <p>{ questWoman[0] }</p>
              <textarea
                name="firstValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { isCheck ? <FaCheck /> : <FiX /> }
              <p>{ questWoman[1] }</p>
              <textarea
                name="secondValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questWoman[2] }</p>
              <textarea
                name="thirdValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questWoman[3] }</p>
              <textarea
                name="fourthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
            </div>
          </div>
        </section>
        <section className="card">
          <div className="card-container">
            <img
              className="image"
              src={ image2 }
              alt="imagen do primeiro estudante"
            />
            <div className="card-question">
              <p>{ questMan[0] }</p>
              <textarea
                name="fifthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questMan[1] }</p>
              <textarea
                name="sixthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questMan[2] }</p>
              <textarea
                name="seventhValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questMan[3] }</p>
              <textarea
                name="eighthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
            </div>
          </div>
        </section>
        <section className="card">
          <div className="card-container">
            <img
              className="image"
              src={ image3 }
              alt="imagen do primeiro estudante"
            />
            <div className="card-question">
              <p>{ questWoman[0] }</p>
              <textarea
                name="ninthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questWoman[1] }</p>
              <textarea
                name="tenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questWoman[2] }</p>
              <textarea
                name="eleventhValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questWoman[3] }</p>
              <textarea
                name="twelfthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
            </div>
          </div>
        </section>
        <section className="card">
          <div className="card-container">
            <img
              className="image"
              src={ image4 }
              alt="imagen do primeiro estudante"
            />
            <div className="card-question">
              <p>{ questWoman[0] }</p>
              <textarea
                name="thirteenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questWoman[1] }</p>
              <textarea
                name="fourteenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questWoman[2] }</p>
              <textarea
                name="fifteenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              <p>{ questWoman[3] }</p>
              <textarea
                name="sixteenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
            </div>
          </div>
        </section>
        <button
          onClick={ handleSubmit }
          type="button"
        >
          verificar
        </button>
      </div>
    </div >
  );
}

export default FirstPage;

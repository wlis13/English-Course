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
    valueQuestion,
    apresentation,
  } = useContext(Context);

  const comparasons = {
    c1: valueQuestion.firstValue === 'her name is Isabelle',
    c2: valueQuestion.secondValue === 'her middlename is Santos',
    c3: valueQuestion.thirdValue === 'her lastname is Fonseca',
    c4: valueQuestion.fourthValue === 'her nickname is Isa',
  }

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
              <h3>{ apresentation[0] }</h3>
              <p>{ questWoman[0] }</p>
              <textarea
                name="firstValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c1
                && <FaCheck className="check" /> }
              { !comparasons.c1
                && valueQuestion.firstValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[1] }</p>
              <textarea
                name="secondValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c2
                && <FaCheck className="check" /> }
              { !comparasons.c2
                && valueQuestion.secondValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[2] }</p>
              <textarea
                name="thirdValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c3
                && <FaCheck className="check" /> }
              { !comparasons.c3
                && valueQuestion.thirdValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[3] }</p>
              <textarea
                name="fourthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c4
                && <FaCheck className="check" /> }
              { !comparasons.c4
                && valueQuestion.fourthValue !== '' && <FiX className="fix" /> }
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
              <h3>{ apresentation[1] }</h3>
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
              <h3>{ apresentation[2] }</h3>
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
              <h3>{ apresentation[3] }</h3>
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
        {/* <button
          onClick={ handleSubmit }
          type="button"
        >
          verificar
        </button> */}
      </div>
    </div >
  );
}

export default FirstPage;

import React, { useContext } from 'react';
import '../style.css';
import { FaCheck } from 'react-icons/fa'
import { FiX } from "react-icons/fi";
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import Context from '../context/StudentContext';
import { Link } from 'react-router-dom';

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
    c5: valueQuestion.fifthValue === 'his name is Daniel',
    c6: valueQuestion.sixthValue === 'his middlename is Cory',
    c7: valueQuestion.seventhValue === 'his lastname is Taylor',
    c8: valueQuestion.eighthValue === 'his nickname is Dan',
    c9: valueQuestion.ninthValue === 'her name is Jessica',
    c10: valueQuestion.tenthValue === 'her middlename is Mendes',
    c11: valueQuestion.eleventhValue === 'her lastname is Torres',
    c12: valueQuestion.twelfthValue === "her don't have a nickname",
    c13: valueQuestion.thirteenthValue === 'her name is Lara',
    c14: valueQuestion.fourteenthValue === 'her middlename is Campos',
    c15: valueQuestion.fifteenthValue === 'her lastname is Fernandes',
    c16: valueQuestion.sixteenthValue === 'her nickname is La',
  }

  return (
    <div className="container">
      <header>
        <h1 className="header">
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
              { comparasons.c5
                && <FaCheck className="check" /> }
              { !comparasons.c5
                && valueQuestion.fifthValue !== '' && <FiX className="fix" /> }
              <p>{ questMan[1] }</p>
              <textarea
                name="sixthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c6
                && <FaCheck className="check" /> }
              { !comparasons.c6
                && valueQuestion.sixthValue !== '' && <FiX className="fix" /> }
              <p>{ questMan[2] }</p>
              <textarea
                name="seventhValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c7
                && <FaCheck className="check" /> }
              { !comparasons.c7
                && valueQuestion.seventhValue !== '' && <FiX className="fix" /> }
              <p>{ questMan[3] }</p>
              <textarea
                name="eighthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c8
                && <FaCheck className="check" /> }
              { !comparasons.c8
                && valueQuestion.eighthValue !== '' && <FiX className="fix" /> }
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
              { comparasons.c9
                && <FaCheck className="check" /> }
              { !comparasons.c9
                && valueQuestion.ninthValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[1] }</p>
              <textarea
                name="tenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c10
                && <FaCheck className="check" /> }
              { !comparasons.c10
                && valueQuestion.tenthValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[2] }</p>
              <textarea
                name="eleventhValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c11
                && <FaCheck className="check" /> }
              { !comparasons.c11
                && valueQuestion.eleventhValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[3] }</p>
              <textarea
                name="twelfthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c12
                && <FaCheck className="check" /> }
              { !comparasons.c12
                && valueQuestion.twelfthValue !== '' && <FiX className="fix" /> }
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
              { comparasons.c13
                && <FaCheck className="check" /> }
              { !comparasons.c13
                && valueQuestion.thirteenthValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[1] }</p>
              <textarea
                name="fourteenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c14
                && <FaCheck className="check" /> }
              { !comparasons.c14
                && valueQuestion.fourteenthValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[2] }</p>
              <textarea
                name="fifteenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c15
                && <FaCheck className="check" /> }
              { !comparasons.c15
                && valueQuestion.fifteenthValue !== '' && <FiX className="fix" /> }
              <p>{ questWoman[3] }</p>
              <textarea
                name="sixteenthValue"
                onChange={ handleChangeValue }
                placeholder="type you answer"
              />
              { comparasons.c16
                && <FaCheck className="check" /> }
              { !comparasons.c16
                && valueQuestion.sixteenthValue !== '' && <FiX className="fix" /> }
            </div>
          </div>
        </section>
        <Link
          className="link"
          to="/page2"
        >
          Next-Page
        </Link>
      </div>
    </div >
  );
}

export default FirstPage;

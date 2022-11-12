import React, { useState } from 'react';
import Context from './StudentContext';

const StudentProvider = ({ children }) => {
  const [firstApresentation, setFirstApresentation] = useState(
    [`Good morning, guys.
  I am a new student here and my name is Isabelle Santos Fonseca,
  and my nickname is Isa, and what are your names?`,
      `Nice to meet you, Isa. My name is Daniel Cory Taylor
  and my nickname is Dan`,
      `Hey! My full name is Jessica Mendes Torres and
  I don't have a nickname`,
      `Hi Isa.
  My name is Lara Campos Fernandes and my nickname is La`]
  );

  const [questWoman, setQuestWoman] = useState(
    [
      `What's her first name?`,
      `What's her middle name?`,
      `What's her last name?`,
      `What's her nickname?`,
    ]
  );

  const [questMan, setQuestMan] = useState(
    [
      `What's his first name?`,
      `What's his middle name?`,
      `What's his last name?`,
      `What's his nickname?`,
    ]
  );

  const [valueQuestion, setValueQuestions] = useState({
    firstValue: '',
    secondValue: '',
    thirdValue: '',
    fourthValue: '',
    fifthValue: '',
    sixthValue: '',
    seventhValue: '',
    eighthValue: '',
    ninthValue: '',
    tenthValue: '',
    eleventhValue: '',
    twelfthValue: '',
    thirteenthValue: '',
    fourteenthValue: '',
    fifteenthValue: '',
    sixteenthValue: '',
  });

  const [isCheck, setIsCheck] = useState(false);

  const handleSubmit = () => {
    if (valueQuestion.firstValue === "her name is Isabelle") {
      setIsCheck(true)
    }
  }

  const handleChangeValue = ({ target }) => {
    const { name, value } = target;
    setValueQuestions((prevState) => ({ ...prevState, [name]: value }))
  }

  const contextProvider = {
    firstApresentation,
    questWoman,
    questMan,
    valueQuestion,
    isCheck,
    setFirstApresentation,
    setQuestWoman,
    setQuestMan,
    handleChangeValue,
    setIsCheck,
    handleSubmit,
  }

  return (
    <Context.Provider value={ contextProvider }>
      { children }
    </Context.Provider>
  )
};

export default StudentProvider;
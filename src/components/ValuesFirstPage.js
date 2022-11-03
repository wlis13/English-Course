import React from 'react'
import '../style.css';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'

const ValuesOne = () => {
  const firstApresentation = [`Good morning, guys.
  I am a new student here and my name is Isabelle Santos Fonseca,
  and my nickname is Isa, and what are your names?`];
  const secondApresentation = [`Nice to meet you, Isa. My name is Daniel Cory Taylor
  and my nickname is Dan`];
  const thirdApresentation = [`Hey! My full name is Jessica Mendes Torres and
  I don't have a nickname`];
  const fourthApresentation = [`Hi Isa.
  My name is Lara Campos Fernandes and my nickname is La`];

  const questionWomen = [
    [`What's her first name?`],
    [`What's her middle name?`],
    [`What's her last name?`],
    [`What's her nickname?`],
  ];
  const questionMen = [
    [`What's his first name?`],
    [`What's his middle name?`],
    [`What's his last name?`],
    [`What's his nickname?`],
  ];

  const studentsValue = [
    {
      image: image1,
      apresentations: firstApresentation,
    },
    {
      image: image2,
      apresentations: secondApresentation,
    },
    {
      image: image3,
      apresentations: thirdApresentation,
    },
    {
      image: image4,
      apresentations: fourthApresentation,
    }
  ];
  return (
    <section className="section">
      { studentsValue.map((item) => (
        <span
          className="cards"
          key={ item.apresentations }
        >
          <img
            className="image"
            src={ item.image }
            alt="primeira"
          />
          <span>
            <p className="paragraph">{ item.apresentations }</p>
            { item.image !== image2 && questionWomen.map((quest) => (
              <ul>
                <li className="question" key={ quest }>{ quest }</li>
                <textarea
                  type="textarea"
                  placeholder="type you answer"
                />
              </ul>
            )) }
            { item.image === image2 && questionMen.map((questM) => (
              <ul>
                <li className="question" key={ questM }>{ questM }</li>
                <textarea
                  type="textarea"
                  placeholder="type you answer"
                />
              </ul>
            )) }
          </span>
        </span>
      )) }
    </section>
  );
}

export default ValuesOne;
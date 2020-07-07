import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.jsx';

import step0 from './Img/0.png';
import step1 from './Img/1.png';
import step2 from './Img/2.png';
import step3 from './Img/3.png';
import step4 from './Img/4.png';
import step5 from './Img/5.png';
import step6 from './Img/6.png';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord() //might need a semi colon here
    }
  }


  render() {
    return (
      <div>
        <h1>Hangman</h1>
      </div>
    )
  }
}

export default Hangman;
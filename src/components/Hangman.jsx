import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.jsx';

import step0 from './img/0.png';
import step1 from './img/1.png';
import step2 from './img/2.png';
import step3 from './img/3.png';
import step4 from './img/4.png';
import step5 from './img/5.png';
import step6 from './img/6.png';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    img: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    }
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    
    return (
      <div className="Hangman container">
        <h1>Hangman</h1>
        <div class="GuessBoxLocation">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div class="ImgLocation">
          <img src={this.props.img[this.state.mistake]} alt=""/>
        </div>
        <hr />
        <div className="text-center">
          <h4><strong>Guess the Movie Title: </strong></h4>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p> 
        </div>
      </div>
    )
  } 
}

export default Hangman;
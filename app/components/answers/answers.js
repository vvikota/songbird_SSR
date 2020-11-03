import * as React from "react";
import {createRef} from 'react';
import styles from "./answers.css";
import {connect} from "react-redux";
import {ActionCreator} from "../../../redux/reducer";
import {
  getCurrentAnswerVariants,
  getCorrectAnswer,
  getIsCorrectAnswer,
  getIsStartLevel
} from "../../../redux/selectors.js";

// import {CategoryQuestions} from "../../types";

const correctSound = 'https://vvikota-songbird.netlify.app/static/media/correct.c59c1ab1.mp3';
const wrongSound = 'https://vvikota-songbird.netlify.app/static/media/wrong.b1392219.mp3';

// interface Props {
//   answerVariants: string[];
//   changeAnswerStatus: () => void;
//   correctAnswer: CategoryQuestions;
//   incrementScore: (userAnswer: number) => void;
//   isCorrectAnswer: boolean;
//   isStartLevel: boolean;
//   onCorrectAnswerClick: () => void;
//   onVariantClick: (currentAnswer: string) => void;
// }

// interface State {
//   userAnswer: string[];
// }

class Answers extends React.PureComponent{
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      userAnswer: new Array(this.props.answerVariants.length).fill(`empty`),
    };
  }

  _audioRef = createRef()

  componentDidUpdate(prevProps){
    if(prevProps.isStartLevel === false && this.props.isStartLevel === true){
      const userAnswer = new Array(this.props.answerVariants.length).fill(`empty`);
      this.setState(() => {
        return {userAnswer: userAnswer}
      })
    }
  }

  render() {
    const {
      answerVariants,
      onVariantClick,
      changeAnswerStatus,
      isCorrectAnswer,
      incrementScore,
      onCorrectAnswerClick,
    } = this.props;
 
    const correctAnswer = this.props.correctAnswer.name;
    const processUserAnswer = (currentAnswer, id) => {
      
      if (!isCorrectAnswer){
        const userAnswer = [...this.state.userAnswer];
        const audio = this._audioRef.current;

        if(audio){
          audio.src = currentAnswer === correctAnswer ? correctSound : wrongSound;
          audio.play();

          if(userAnswer[id] === `empty`){
            userAnswer[id] = currentAnswer
            this.setState({userAnswer})
          } 
    
          if(currentAnswer === correctAnswer){
            onCorrectAnswerClick();
            incrementScore(this.state.userAnswer.filter(item => item === `empty`).length - 1)
            changeAnswerStatus()
          }
        }
      } 
      onVariantClick(currentAnswer);
    }

    const classForButton = (id) => (this.state.userAnswer[id] === correctAnswer ? styles.correct : styles.incorrect);

    return (
      <section className={styles.answers}>
              <audio ref={this._audioRef} />
              {answerVariants.map((currentAnswer, id) => {
                return (
                  <button 
                    className={(this.state.userAnswer[id] !== `empty`) ? `${styles.answersItem} ${classForButton(id)}` :  styles.answersItem }
                    key={id}
                    onClick={() => processUserAnswer(currentAnswer, id)}
                  >
                    {currentAnswer}
                  </button>
                )
      })}
      </section>
    )  
  }
}

const mapStateToProps = (state) => (
  {
    answerVariants: getCurrentAnswerVariants(state),
    correctAnswer: getCorrectAnswer(state),
    isCorrectAnswer: getIsCorrectAnswer(state),
    isStartLevel: getIsStartLevel(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  onVariantClick: (answer) => {
    dispatch(ActionCreator.chooseVariant(answer))
  },

  changeAnswerStatus: () => {
    dispatch(ActionCreator.changeAnswerStatus())
  },

  incrementScore: (numberOfPoints) => {
    dispatch(ActionCreator.incrementScore(numberOfPoints))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
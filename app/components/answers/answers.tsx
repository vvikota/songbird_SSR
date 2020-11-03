import * as React from "react";
import {createRef} from 'react';
import {connect} from "react-redux";
import {CategoryQuestions, stateInterface} from "../../../types";
import {ActionCreator} from "../../../redux/reducer.js";
import { getCurrentAnswerVariants, getCorrectAnswer, getIsCorrectAnswer, getIsStartLevel } from "../../../redux/selectors.js";
import * as styles from "./answers.css";

const correctSound = 'https://vvikota-songbird.netlify.app/static/media/correct.c59c1ab1.mp3';
const wrongSound = 'https://vvikota-songbird.netlify.app/static/media/wrong.b1392219.mp3';

interface Props {
  answerVariants: string[];
  changeAnswerStatus: () => void;
  correctAnswer: CategoryQuestions;
  incrementScore: (userAnswer: number) => void;
  isCorrectAnswer: boolean;
  isStartLevel: boolean;
  onCorrectAnswerClick: () => void;
  onVariantClick: (currentAnswer: string) => void;
}

interface State {
  userAnswer: string[];
}

class Answers extends React.PureComponent<Props, State>{
  constructor(props: Props | Readonly<Props>) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      userAnswer: new Array(this.props.answerVariants.length).fill(`empty`),
    };
  }

  private _audioRef = createRef<HTMLAudioElement>()

  componentDidUpdate(prevProps: { isStartLevel: boolean; }){
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
    const processUserAnswer = (currentAnswer: string, id: number) => {
      
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

    const classForButton = (id: number) => (this.state.userAnswer[id] === correctAnswer ? styles.correct : styles.incorrect);

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

const mapStateToProps = (state: stateInterface) => (
  {
    answerVariants: getCurrentAnswerVariants(state),
    correctAnswer: getCorrectAnswer(state),
    isCorrectAnswer: getIsCorrectAnswer(state),
    isStartLevel: getIsStartLevel(state),
  }
);

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  onVariantClick: (answer: string) => {
    dispatch(ActionCreator.chooseVariant(answer))
  },

  changeAnswerStatus: () => {
    dispatch(ActionCreator.changeAnswerStatus())
  },

  incrementScore: (numberOfPoints: number) => {
    dispatch(ActionCreator.incrementScore(numberOfPoints))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
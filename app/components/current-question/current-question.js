import * as React from "react";
import styles from "./current-question.css";
import AudioPlayer from "../player/player";
import {connect} from "react-redux";
import {
  getCorrectAnswer,
  getIsCorrectAnswer,
  getIsStartLevel
} from "../../../redux/selectors";
// import {CategoryQuestions} from "../../types";

const defaultImg = 'https://vvikota-songbird.netlify.app/static/media/default.7ccb15c9.jpg';

// interface CurrentQuestionProps {
//   isPlaying: boolean;
//   isCorrectAnswer: boolean;
//   onPlayButtonClick: () => void;
//   correctAnswer: CategoryQuestions
// }

const CurrentQuestion = (props) => {
  const {
    correctAnswer,
    isCorrectAnswer,
    isPlaying,
    onPlayButtonClick,
  } = props;

  const src = correctAnswer.audio

  return (
    <section className={styles.currentQuestion}>
      <img
        className={styles.currentQuestionImg}
        src={isCorrectAnswer ? correctAnswer.image : defaultImg}
        alt="bird" 
      />
      <div className={styles.currentQuestionPlayerBlock}>
        <div className={styles.currentQuestionPlayerTitleWrapper}>
          <h2 className={styles.currentQuestionPlayerTitle}>
            {isCorrectAnswer ? correctAnswer.name : `*****`}
          </h2>
        </div>
        
        <div className={styles.currentQuestionPlayer}>
          { src ? (
            <AudioPlayer 
              isPlaying = {isPlaying}
              onPlayButtonClick = {onPlayButtonClick}
              src = {src}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => (
  {
    correctAnswer: getCorrectAnswer(state),
    isCorrectAnswer: getIsCorrectAnswer(state),
    isStartLevel: getIsStartLevel(state),
  }
);

export default connect(mapStateToProps)(CurrentQuestion);
import * as React from 'react';
import styles from './score.css';
import {connect} from "react-redux";
import {getGameScore} from "../../../redux/selectors";
// import {scoreRowInterface, stateInterface} from "../../types";
import {ActionCreator} from "../../../redux/reducer";

// interface scoreProps {
//   gameScore: scoreRowInterface[]
//   resetGame: () => void
//   changeScoreShowStatus: () => void
//   onNewGameClick: () => void
// }

const Score = (props) => {
  const {
    gameScore,
    resetGame,
    changeScoreShowStatus,
    onNewGameClick
  } = props;

const startNewGame = () => {
  resetGame()
  changeScoreShowStatus()
  onNewGameClick()
}

  return (
    <section className={styles.score}> 
      <div className={styles.scoreContent}>
      <h2>Score:</h2>
      <ul>
      {gameScore.map((item, key) => {
        return <li key={key}>
          <span>{item.name}: </span>
          <span>{item.score}</span>
        </li>
      })}
      </ul>
      <button onClick={startNewGame}>Начать сначала</button>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => (
  {gameScore : getGameScore(state)}
);

const mapDispatchToProps = (dispatch) => ({
  changeScoreShowStatus: () => {
    dispatch(ActionCreator.changeScoreShowStatus())
  },
  resetGame: () => {
    dispatch(ActionCreator.resetGame())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);



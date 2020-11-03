import * as React from 'react';
import {connect} from "react-redux";
import {scoreRowInterface, stateInterface} from "../../../types";
import {getGameScore} from "../../../redux/selectors.js";
import {ActionCreator} from "../../../redux/reducer.js";
import * as styles from './score.css';

interface scoreProps {
  gameScore: scoreRowInterface[]
  resetGame: () => void
  changeScoreShowStatus: () => void
  onNewGameClick: () => void
}

const Score = (props: scoreProps) => {
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

const mapStateToProps = (state: stateInterface) => (
  {gameScore : getGameScore(state)}
);

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  changeScoreShowStatus: () => {
    dispatch(ActionCreator.changeScoreShowStatus())
  },
  resetGame: () => {
    dispatch(ActionCreator.resetGame())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);



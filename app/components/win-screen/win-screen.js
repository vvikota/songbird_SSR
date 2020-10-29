import * as React from "react";
import styles from './win-screen.css';
import {connect} from "react-redux";
import {ActionCreator} from "../../../redux/reducer";
import {getCategories, getScoreShowStatus, getshowSaveResult, getScore} from "../../../redux/selectors";
import Score from "../score/score";
import SaveResult from "../save-result/save-result";
// import {stateInterface} from "../../types";

// const winImgURL = "https://vvikota-songbird.netlify.app/static/media/winner.20431031.jpg";

// interface WinScreenProps { 
//   score: number
//   onNextGameClick: () => void
//   resetGame: () => void
//   categories: string[]
//   isScoreShow: boolean
//   changeSaveResultShowStatus: () => void
//   isShowSaveResult: boolean
// }

const WinScreen = (props) =>  {
  const {
    score,
    onNextGameClick,
    resetGame,
    categories,
    isScoreShow,
    isShowSaveResult,
    changeSaveResultShowStatus,
  } = props;
  
  const maxScore = categories.length * (categories.length - 1);
  const absoluteVictory = score === maxScore;

  const startNextGame = () => {
    resetGame()
    onNextGameClick()
  }

  return (
    <section className={styles.winScreenWrapper}>
    <h1>Поздравляем!</h1>
    {absoluteVictory ? (
      <div>
        <span>Абсолютная победа!</span>
        <p>Вы прошли викторину и набрали максимальное колличество возможных баллов {score} из {score}</p>
        <img src={winImgURL} alt="ornitolog" className={styles.winmage}/>
        <button onClick={changeSaveResultShowStatus}>Сохранить результат</button>
      </div>
    ) : (
      <div>
        <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
        <button onClick={startNextGame}>
          Попробовать ещё раз!
        </button>

        <button onClick={changeSaveResultShowStatus}>Сохранить результат</button>
      </div>
    )}
    {isScoreShow ? <Score onNewGameClick={onNextGameClick} /> : ''}
    {isShowSaveResult ? <SaveResult /> : ''}
  </section>
  )
};

const mapStateToProps = (state) => ({
    score: getScore(state),
    categories: getCategories(state),
    isScoreShow: getScoreShowStatus(state),
    isShowSaveResult: getshowSaveResult(state),
})

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => {
    dispatch(ActionCreator.resetGame())
  },
  changeSaveResultShowStatus: () => {
    dispatch(ActionCreator.changeSaveResultShowStatus())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WinScreen);
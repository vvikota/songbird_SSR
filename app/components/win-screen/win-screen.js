import * as React from "react";
import styles from './win-screen.css';
// import winImg from '../../assets/images/winner.jpg';
// import {connect} from "react-redux";
// import {ActionCreator} from "../../reducer/main/main";
// import {getScore} from "../../reducer/main/selectors";
// import {getCategories, getScoreShowStatus, getshowSaveResult} from "../../reducer/main/selectors";
// import Score from "../score/score";
// import SaveResult from "../save-result/save-result";
// import {stateInterface} from "../../types";

// interface WinScreenProps { 
//   score: number
//   onNextGameClick: () => void
//   resetGame: () => void
//   categories: string[]
//   isScoreShow: boolean
//   changeSaveResultShowStatus: () => void
//   isShowSaveResult: boolean
// }

const WinScreen = () =>  {
  // const {
  //   score,
  //   onNextGameClick,
  //   resetGame,
  //   categories,
  //   isScoreShow,
  //   isShowSaveResult,
  //   changeSaveResultShowStatus,
  // } = props;
  
  // const maxScore = categories.length * (categories.length - 1);
  // const absoluteVictory = score === maxScore;

  // const startNextGame = () => {
  //   resetGame()
  //   onNextGameClick()
  // }

  return (
    <section className={styles.winScreen}>
      <h1>Поздравляем!</h1>
      {/* <img src={winImg} alt="ornitolog" className="win-image"/> */}
      {/* {absoluteVictory ? (
        <>
          <span>Абсолютная победа!</span>
          <p>Вы прошли викторину и набрали максимальное колличество возможных баллов {score} из {score}</p>
          <img src={winImg} alt="ornitolog" className="win-image"/>
          <button onClick={changeSaveResultShowStatus}>Сохранить результат</button>
        </>
      ) : (
        <>
          <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
          <button onClick={startNextGame}>
            Попробовать ещё раз!
          </button>

          <button onClick={changeSaveResultShowStatus}>Сохранить результат</button>
        </>
      )}
      {isScoreShow ? <Score onNewGameClick={onNextGameClick} /> : ''}
      {isShowSaveResult ? <SaveResult /> : ''} */}
    </section>
  )
};

// const mapStateToProps = (state: stateInterface) => ({
//     score: getScore(state),
//     categories: getCategories(state),
//     isScoreShow: getScoreShowStatus(state),
//     isShowSaveResult: getshowSaveResult(state),
// })

// const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
//   resetGame: () => {
//     dispatch(ActionCreator.resetGame())
//   },
//   changeSaveResultShowStatus: () => {
//     dispatch(ActionCreator.changeSaveResultShowStatus())
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(WinScreen);
export default WinScreen;
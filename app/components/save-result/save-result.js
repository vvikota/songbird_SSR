import * as React from 'react';
import styles from './save-result.css';

import {getScore, getGameScore} from "../../../redux/selectors.tsx";
// import {stateInterface} from "../../types";
import {connect} from "react-redux";
import {ActionCreator} from "../../../redux/reducer";

// interface currentScoreRow {
//   name: string
//   score: number
// }

// interface Props {
//   saveResult: (name: string, currentScore: number, currentScoreList: currentScoreRow[]) => void
//   changeScoreShow: () => void
//   changeSaveResultShow: () => void
//   currentScore: number
//   currentScoreList: currentScoreRow[]
// }

// interface State {
//   inputValue: string
// }

class SaveResult extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {
      saveResult,
      changeSaveResultShow,
      changeScoreShow,
      currentScore,
      currentScoreList,
    } = this.props;

    const {inputValue} = this.state
  
    const saveResultScore = () => {
      saveResult(inputValue, currentScore, currentScoreList)
      changeSaveResultShow()
      changeScoreShow()
    }
  
    return (
      <section className={styles.saveResultForm}>
        <form>
          <h3>Введите свое имя:</h3>
          <input type="text" value={inputValue} onChange={this.handleChange} />
          <button onClick={() => saveResultScore()}>Сохранить</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => (
  {
    currentScore : getScore(state),
    currentScoreList: getGameScore(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  saveResult: (name, currentScore, currentScoreList) => {
    dispatch(ActionCreator.saveResultToGameScore(name, currentScore, currentScoreList))
  },

  changeSaveResultShow: () => {
    dispatch(ActionCreator.changeSaveResultShowStatus())
  },

  changeScoreShow: () => {
    dispatch(ActionCreator.changeScoreShowStatus())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveResult);
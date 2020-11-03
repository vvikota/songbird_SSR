import * as React from "react";
import styles from './main-screen.css';
import CurrentQuestion from "../current-question/current-question";
import Answers from "../answers/answers";
import BirdDescription from "../bird-description/bird-description.tsx";
import {ActionCreator} from "../../../redux/reducer";
import {connect} from "react-redux";
import {
  getQuestions,
  getCurrenCategory,
  getIsCorrectAnswer,
  getCategories
} from "../../../redux/selectors.tsx";
// import {DataCategory} from "../../types";

// interface Props {
//   getFirstCorrectAnswer: (questions: DataCategory[], currentCategory: number) => void;
//   currenCategory: number;
//   questions: DataCategory[]
//   isCorrectAnswer: boolean;
//   categories: number[];
//   onNextLevelClick: (questions: DataCategory[], currenCategory: number) => void;
//   onGameOverClick: () => void;
// }

// interface State {
//   isPlaying: boolean;
//   isPlayingVariantAnswer: boolean;
// }

class MainScreen extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isPlayingVariantAnswer: false,
    };
  }

  componentDidMount(){
    this.props.getFirstCorrectAnswer(this.props.questions, this.props.currenCategory)
  }

  render() {
    const {
      isPlaying,
      isPlayingVariantAnswer, 
    } = this.state;
    
    const {
      currenCategory,
      questions,
      isCorrectAnswer,
      categories,
      onNextLevelClick,
      onGameOverClick,
    } = this.props;

    const islastCorrectAnswer = ((categories.length - 1) === currenCategory) && isCorrectAnswer;

    const onButtonclick = () => {
      if(islastCorrectAnswer){
        onGameOverClick();
      } else {
        return isCorrectAnswer ? onNextLevelClick(questions, currenCategory) : null
      }
    }
   
    return (
      <div>
        <CurrentQuestion 
          isPlaying = {isPlaying}
          onPlayButtonClick = {() => this.setState({isPlaying: !isPlaying, isPlayingVariantAnswer: false})}
        />
        <section className={styles.answerSection}>
          <Answers 
            onCorrectAnswerClick={() => this.setState({isPlaying: false})}
          />
          <BirdDescription 
            isPlaying = {isPlayingVariantAnswer}
            onPlayButtonClick = {() =>
              this.setState({isPlayingVariantAnswer: !isPlayingVariantAnswer, isPlaying: false})}
          />
        </section>
        <button
          className={isCorrectAnswer ? `${styles.nextLevelButton} ${styles.nextLevelButtonActive}` : styles.nextLevelButton}
          onClick={onButtonclick}
        >  
        {islastCorrectAnswer ? `Закончить игру` : `Следующий вопрос`}
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    currenCategory: getCurrenCategory(state),
    questions: getQuestions(state),
    isCorrectAnswer: getIsCorrectAnswer(state),
    categories: getCategories(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  onNextLevelClick: (dataCurrentQuestion, currenCategory) => {
    dispatch(ActionCreator.changeCurrentCategory())
    dispatch(ActionCreator.loadCorrectAnswer(dataCurrentQuestion, currenCategory + 1))
  },

  getFirstCorrectAnswer: (questions, currenCategory) => {
    dispatch(ActionCreator.loadCorrectAnswer(questions, currenCategory))
  },  
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
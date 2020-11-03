import * as React from "react";
import {connect} from "react-redux";
import {DataCategory, stateInterface} from "../../../types";
// @ts-ignore
import CurrentQuestion from "../current-question/current-question.tsx";
// @ts-ignore
import Answers from "../answers/answers.tsx";
// @ts-ignore
import BirdDescription from "../bird-description/bird-description.tsx";
// @ts-ignore
import {ActionCreator} from "../../../redux/reducer.js";
// @ts-ignore
import { getQuestions, getCurrenCategory, getIsCorrectAnswer, getCategories } from "../../../redux/selectors.js";

const styles = require('./main-screen.css')
interface Props {
  getFirstCorrectAnswer: (questions: DataCategory[], currentCategory: number) => void;
  currenCategory: number;
  questions: DataCategory[]
  isCorrectAnswer: boolean;
  categories: number[];
  onNextLevelClick: (questions: DataCategory[], currenCategory: number) => void;
  onGameOverClick: () => void;
}

interface State {
  isPlaying: boolean;
  isPlayingVariantAnswer: boolean;
}

class MainScreen extends React.PureComponent<Props, State>{
  constructor(props: Props | Readonly<Props>) {
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

const mapStateToProps = (state: stateInterface) => (
  {
    currenCategory: getCurrenCategory(state),
    questions: getQuestions(state),
    isCorrectAnswer: getIsCorrectAnswer(state),
    categories: getCategories(state),
  }
);

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  onNextLevelClick: (dataCurrentQuestion: DataCategory[], currenCategory: number) => {
    dispatch(ActionCreator.changeCurrentCategory())
    dispatch(ActionCreator.loadCorrectAnswer(dataCurrentQuestion, currenCategory + 1))
  },

  getFirstCorrectAnswer: (questions: DataCategory[], currenCategory: number) => {
    dispatch(ActionCreator.loadCorrectAnswer(questions, currenCategory))
  },  
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
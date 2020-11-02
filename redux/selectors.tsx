import {createSelector} from "reselect";
import {DataCategory} from "../types";

export const getQuestions = (state: { questions: DataCategory[]; }) => {
  return state.questions;
};

export const getGameScore =  (state: { gameScore: [] }) => {
  return state.gameScore;
}

export const getScoreShowStatus = (state: { showScore: boolean }) => {
  return state.showScore;
}

export const getshowSaveResult = (state: { showSaveResult: boolean }) => {
  return state.showSaveResult;
}

export const getCategories = createSelector(
  getQuestions,
  (questions) => questions.map(question => question.category)
)

export const getCurrenCategory = (state: { currenCategory: number; }) => {
  return state.currenCategory || 0;
};

export const getDataCurrentQuestion = createSelector(
  getQuestions,
  getCurrenCategory,
  (rezultOne, rezultTwo) => {
    return rezultOne[rezultTwo].data;
  }
)

export const getCurrentAnswerVariants = createSelector(
  getDataCurrentQuestion,
  (data) => data.map(answer => answer.name)
)


export const getActiveAnswer = (state: { activeAnswer: string; }) => {
  return state.activeAnswer;
};

export const getActiveAnswerData = createSelector(
  getDataCurrentQuestion,
  getActiveAnswer,
  (rezultOne, rezultTwo) => {
    return rezultOne.filter(
      item => item.name === rezultTwo)[0] || 'no active answer';
  }
)

export const getScore = (state: { score: number; }) => {
  return state.score;
};

export const getIsCorrectAnswer = (state: { isCorrectAnswer: boolean; }) => {
  return state.isCorrectAnswer;
};

export const getIsStartLevel = (state: { isStartLevel: boolean; }) => {
  return state.isStartLevel;
};


export const getCorrectAnswer = (state: { correctAnswer: number; }) => {
  return state.correctAnswer;
};

import {createSelector} from "reselect";

export const getQuestions = (state) => {
  return state.questions;
};

export const getGameScore =  (state) => {
  return state.gameScore;
}

export const getScoreShowStatus = (state) => {
  return state.showScore;
}

export const getshowSaveResult = (state) => {
  return state.showSaveResult;
}

export const getCategories = createSelector(
  getQuestions,
  (questions) => questions.map(question => question.category)
)

export const getCurrenCategory = (state) => {
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


export const getActiveAnswer = (state) => {
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

export const getScore = (state) => {
  return state.score;
};

export const getIsCorrectAnswer = (state) => {
  return state.isCorrectAnswer;
};

export const getIsStartLevel = (state) => {
  return state.isStartLevel;
};


export const getCorrectAnswer = (state) => {
  return state.correctAnswer;
};

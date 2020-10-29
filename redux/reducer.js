import questions from "./guess_the_melody_data";

const initialState = {
  activeAnswer: ``,
  correctAnswer: ``,
  currenCategory: 0,
  gameScore: [],
  isCorrectAnswer: false,
  isStartLevel: true,
  questions: [],
  score: 0,
  showSaveResult: true,
  showScore: false,
}

const ActionType = {
  CHANGE_CURRENT_CATEGORY: `CHANGE_CURRENT_CATEGORY`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  LOAD_CORRECT_ANSWER: `LOAD_CORRECT_ANSWER`,
  CHOOSE_VARIANT: `CHOOSE_VARIAN`,
  CHANGE_ANSWER_STATUS: `CHANGE_ANSWER_STATUS`,
  INCREMENT_SCORE: `INCREMENT_SCORE`,
  RESET_GAME: `RESET_GAME`,
  CHANGE_SCORE_SHOW_STATUS: `CHANGE_SCORE_SHOW_STATUS`,
  CHANGE_SAVE_RESULT_SHOW_STATUS: `CHANGE_SAVE_RESULT_SHOW_STATUS`,
  SAVE_RESULT_TO_GAME_SCORE: `SAVE_RESULT_TO_GAME_SCORE`,
}

const ActionCreator = {
  saveResultToGameScore: (userName, currentUserScore, currentScoreList) => {
    return {
      type: ActionType.SAVE_RESULT_TO_GAME_SCORE,
      payload: [...currentScoreList, {name: userName, score: currentUserScore}]
    }
  },

  changeSaveResultShowStatus: () => ({
    type: ActionType.CHANGE_SAVE_RESULT_SHOW_STATUS,
  }),

  changeScoreShowStatus: () => ({
    type: ActionType.CHANGE_SCORE_SHOW_STATUS,
  }),

  changeCurrentCategory: () => ({
    type: ActionType.CHANGE_CURRENT_CATEGORY,
    payload: 1,
  }),

  loadQuestions: () => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions,
  }),

  loadCorrectAnswer: (data, currenCategory) => {
    const curentCategoryData = data[currenCategory].data; 
    const random = Math.floor(Math.random() * 6);
    const currentAnswerData = curentCategoryData[random];
    console.log(currentAnswerData.name)

    return {
      type: ActionType.LOAD_CORRECT_ANSWER,
      payload: currentAnswerData,
    }
  },

  chooseVariant: (answer) => ({
    type: ActionType.CHOOSE_VARIANT,
    payload: answer,
  }),

  changeAnswerStatus: () => ({
    type: ActionType.CHANGE_ANSWER_STATUS,
  }),

  incrementScore: (numberOfPoints) => ({
    type: ActionType.INCREMENT_SCORE,
    payload: numberOfPoints,
  }),

  resetGame: () => ({
    type: ActionType.RESET_GAME,
  })
}

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CATEGORY:
      return {
        ...state,
        currenCategory: state.currenCategory + action.payload,
        isStartLevel: true,
        isCorrectAnswer: false,
      };

    case ActionType.LOAD_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };

    case ActionType.CHOOSE_VARIANT:
      return {
        ...state,
        isStartLevel: false,
        activeAnswer: action.payload
      };

    case ActionType.LOAD_CORRECT_ANSWER:
      return {
        ...state,
        correctAnswer: action.payload
      };

    case ActionType.CHANGE_ANSWER_STATUS:
      return {
        ...state,
        isCorrectAnswer: true
    };

    case ActionType.INCREMENT_SCORE:
      return{
        ...state,
        score: state.score + action.payload,
      };

    case ActionType.RESET_GAME:
      return{
        ...state,
        currenCategory: 0,
        score: 0,
        isCorrectAnswer: false,
        isStartLevel: true,
        activeAnswer: ``,
        correctAnswer: ``,
      };

    case ActionType.CHANGE_SCORE_SHOW_STATUS:
      return{
        ...state,
        showScore: !state.showScore,
      };

    case ActionType.CHANGE_SAVE_RESULT_SHOW_STATUS:
      return {
        ...state,
        showSaveResult: !state.showSaveResult,
      };

    case ActionType.SAVE_RESULT_TO_GAME_SCORE:
      return {
        ...state,
        gameScore: action.payload
      };

    default: return state;
  }
};

export {reducer, ActionCreator};

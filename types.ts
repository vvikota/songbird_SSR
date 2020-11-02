export interface CategoryQuestions {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

export interface DataCategory {
  category: string;
  data: CategoryQuestions[];
}

export interface scoreRowInterface {
  name: string,
  score: number
}

export interface stateInterface {
  questions: [],
  currenCategory: number,
  score: number,
  isCorrectAnswer: boolean,
  isStartLevel: boolean,
  activeAnswer: string,
  correctAnswer: string,
  showScore: boolean,
  gameScore: scoreRowInterface[],
}
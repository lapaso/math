export interface Question {
  firstNumber: string;
  operator: string;
  secondNumber: string;
  userResult: string | null;
  passed: boolean | null;
  result: number | null;
}

export interface Game {
  questions: Question[];
  isFinished: boolean;
}

export interface GameList {
  list: Game[];
}

'use client';
import { Game, Question } from './history';
import { getOperationResult } from './listOfOperators';
import { User, UserInterface } from './user';

function getRandomInt(min: number | string, max: number | string): number {
  let minValue = Number(min ?? 0);
  let maxValue = Number(max ?? 0);
  minValue = Math.ceil(minValue);
  maxValue = Math.floor(maxValue);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

export class HistoryRepository {
  static loadAllHistoryFromStorage() {}

  static addGame(data: Game) {
    const list = localStorage.loadFromStorage();
    list.push(data);

    localStorage.setItem('history', JSON.stringify(list));
  }

  static getCurrentGameQuestion() {
    return 1;
  }

  static createQuestion = (currentUser: User): Question => {
    let first = getRandomInt(0, currentUser.maxNumber);
    let second = getRandomInt(0, currentUser.maxNumber);
    const operator =
      currentUser?.operations[
        getRandomInt(0, currentUser?.operations.length - 1)
      ];

    if (currentUser.withoutNagativeResult) {
      const temp = Math.max(first, second);

      second = Math.min(first, second);
      first = temp;
    }
    return {
      firstNumber: first.toString(),
      operator,
      secondNumber: second.toString(),
      result: getOperationResult(first, operator, second),
      userResult: null,
      passed: null,
    };
  };
}

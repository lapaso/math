export interface UserInterface {
  firstName: string;
  lastName: string;
  operations: string[];
  countOfQuestions: string;
  maxNumber: string;
  withoutNagativeResult: boolean;
}

export class User implements UserInterface {
  public firstName: string = 'Guest';
  public lastName: string = '';
  public operations: string[] = ['+', '-', '*'];
  public countOfQuestions: string = '10';
  public maxNumber: string = '100';
  public withoutNagativeResult: boolean = true;
}

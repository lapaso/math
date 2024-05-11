'use client';

import { User, UserInterface } from './user';

export class UserRepository {
  static currentUser: User;

  static loadFromStorage(): User | null {
    try {
      const data = localStorage.getItem('currentUser');
      if (data) {
        const parsedData = JSON.parse(data);
        const user = new User();

        user.firstName = parsedData.firstName;
        user.lastName = parsedData.lastName;
        user.operations = parsedData.operations;
        user.countOfQuestions = parsedData.countOfQuestions;
        user.maxNumber = parsedData.maxNumber;
        user.withoutNagativeResult = parsedData.withoutNagativeResult;

        UserRepository.currentUser = user;

        return user;
      }
    } catch (e) {
      return null;
    }
    return null;
  }

  static get(): User | null {
    if (UserRepository.currentUser) {
      return this.currentUser;
    }

    return UserRepository.loadFromStorage();
  }

  static getOrDefault(): User {
    const user = UserRepository.loadFromStorage();
    if (!user) {
      return new User();
    }
    return user;
  }

  static saveToStorage(data: UserInterface) {
    UserRepository.currentUser = data;
    localStorage.setItem('currentUser', JSON.stringify(data));
  }
}

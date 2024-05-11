'use client';

import MainContent from '@/app/components/main-content';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { UserRepository } from '../lib/userRepository';
import QuestionComponent from './components/question';
import { Question } from '../lib/history';
import { getOperationResult } from '../lib/listOfOperators';
import { HistoryRepository } from '../lib/historyRepository';

export default function Home() {
  const router = useRouter();
  const currentUser = UserRepository.get();
  if (!currentUser) {
    router.push('/account');
    return;
  }

  const [currentQuestion, setCurrentQuestion] = useState(
    HistoryRepository.createQuestion(currentUser)
  );
  const [currentNumber, setCurrentNumber] = useState(
    HistoryRepository.getCurrentGameQuestion()
  );

  const onQuestionSubmit = (result: string | null) => {
    if (result === null) {
      currentQuestion.userResult = result;
    }

    setCurrentQuestion(HistoryRepository.createQuestion(currentUser));
    setCurrentNumber(HistoryRepository.getCurrentGameQuestion() + 1);
  };

  return (
    <MainContent>
      <div>
        <h1 className='mb-3 text-end'>
          {currentNumber}/{currentUser?.countOfQuestions}
        </h1>

        <QuestionComponent
          firstNumber={currentQuestion.firstNumber}
          secondNumber={currentQuestion.secondNumber}
          operator={currentQuestion.operator}
          onSubmit={onQuestionSubmit}
        ></QuestionComponent>
      </div>
    </MainContent>
  );
}

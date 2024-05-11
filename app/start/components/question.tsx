'use client';

import { useState } from 'react';
import Wrapper from './wrapper';

export interface QuestionProps {
  firstNumber: string;
  secondNumber: string;
  operator: string;
  onSubmit: (res: string | null) => void;
}

export default function QuestionComponent({
  firstNumber,
  secondNumber,
  operator,
  onSubmit,
}: QuestionProps) {
  const [result, setResult] = useState('');

  const onSubmitHandler = () => {
    onSubmit(result);
    setResult('');
  };

  const onSkipHandler = () => {
    onSubmit(null);
    setResult('');
  };

  return (
    <div>
      <div className='mb-12 grid grid-cols-3 gap-3 text-center sm:mb-5 sm:grid-cols-5'>
        <Wrapper>{firstNumber}</Wrapper>
        <Wrapper>{operator}</Wrapper>
        <Wrapper>{secondNumber}</Wrapper>
        <Wrapper className='max-sm:col-span-3'>=</Wrapper>
        <Wrapper className='px-2 max-sm:col-span-3'>
          <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className='w-full px-3 py-4 text-center'
            type='number'
            max='99999'
          />
        </Wrapper>
      </div>
      <div className='grid grid-cols-1 gap-4 text-2xl sm:grid-cols-2'>
        <button
          className='rounded-md border border-sky-500 bg-slate-400 p-5'
          onClick={onSkipHandler}
        >
          skip
        </button>
        <button
          className='rounded-md border border-sky-500 bg-emerald-700 p-5'
          onClick={onSubmitHandler}
        >
          submit
        </button>
      </div>
    </div>
  );
}

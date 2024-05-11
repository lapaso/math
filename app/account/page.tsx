'use client';

import { useCallback, useState } from 'react';
import CustomInput from '@/app/account/components/custom-input';
import SelectList from '@/app/account/components/select-list';
import { useRouter } from 'next/navigation';
import { listOfOperations } from '../lib/listOfOperators';
import { User, UserInterface } from '../lib/user';
import { UserRepository } from '../lib/userRepository';
import CheckboxItem from './components/checkbox-item';

export interface HandlerProxy {
  target: { name: string; value: any };
}

export default function Config() {
  const router = useRouter();

  const user: User = UserRepository.getOrDefault();

  const [state, setState] = useState(user);
  const {
    firstName,
    lastName,
    operations,
    countOfQuestions,
    maxNumber,
    withoutNagativeResult,
  } = state;

  const handleChange = useCallback((e: HandlerProxy) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    UserRepository.saveToStorage({ ...state });

    router.push('/');
  };

  return (
    <div className='grid'>
      <form onSubmit={handleSubmit}>
        <div className='mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
          <CustomInput
            name='firstName'
            value={firstName}
            onChange={handleChange}
            label='First Name'
          ></CustomInput>

          <CustomInput
            name='lastName'
            value={lastName}
            onChange={handleChange}
            label='Last Name'
          ></CustomInput>
        </div>

        <div className='mt-10 space-y-10 border-y border-sky-500 pt-2'>
          <SelectList
            name='operations'
            objects={listOfOperations}
            legend='available operations'
            onChange={handleChange}
            value={operations}
          />
        </div>

        <div className='mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
          <CustomInput
            name='countOfQuestions'
            value={countOfQuestions}
            onChange={handleChange}
            label='count of questions'
          ></CustomInput>

          <CustomInput
            name='maxNumber'
            value={maxNumber}
            onChange={handleChange}
            label='Max Number'
          ></CustomInput>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
          <CheckboxItem
            name='withoutNagativeResult'
            label='Without Nagative Result'
            value={withoutNagativeResult}
            onChange={(name: string, value: boolean) =>
              handleChange({
                target: { name, value },
              })
            }
          ></CheckboxItem>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

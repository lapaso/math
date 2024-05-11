'use client';

import MainContent from '@/app/components/main-content';
import { useRouter } from 'next/navigation';
import { UserRepository } from './lib/userRepository';
import Link from 'next/link';

export default function Home() {
  const currentUser = UserRepository.get();
  const router = useRouter();

  if (!currentUser) {
    router.push('/account');
    return;
  }

  return (
    <div className='mt-44 text-center sm:mt-8'>
      <h1 className='mb-10 text-3xl font-bold '>
        Hello, {currentUser.firstName}
      </h1>

      <Link
        href='/start'
        className='rounded-md border border-sky-500 bg-emerald-700 p-7'
      >
        Get Started
      </Link>
    </div>
  );
}

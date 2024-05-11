import Image from 'next/image';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className='relative z-10 px-4 pb-5 pt-7 ring-1 ring-zinc-950/5 dark:ring-white/5'>
      <div className='mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl'>
        <div className='flex items-center gap-2 sm:gap-4'>
          <Link href='/'>
            <Image src='/logo.png' width={50} height={50} alt='logo'></Image>
          </Link>
        </div>
        <div className='flex items-center gap-8'>
          <Link href='/account'>Account</Link>
          <Link href='/history'>history</Link>
        </div>
      </div>
    </header>
  );
}

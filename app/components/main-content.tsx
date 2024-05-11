import Image from 'next/image';

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='max-w-container relative mx-auto mb-6 w-full px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-4'>
      <div className='mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none '>
        {children}
      </div>
    </main>
  );
}

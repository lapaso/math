import { ReactNode } from 'react';

export default function Wrapper({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-32 content-center rounded-md border border-sky-500 text-3xl font-bold ${className}`}
    >
      {children}
    </div>
  );
}

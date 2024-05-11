export default function Wrapper({ children, className = '' }) {
  return (
    <div
      className={`h-32 content-center rounded-md border border-sky-500 text-3xl font-bold ${className}`}
    >
      {children}
    </div>
  );
}

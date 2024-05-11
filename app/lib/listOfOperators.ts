export const listOfOperations = [
  {
    name: '+',
    label: '+',
  },
  {
    name: '-',
    label: '-',
  },
  {
    name: '*',
    label: '*',
  },
  {
    name: '/',
    label: '/',
  },
];

const map: { [key: string]: (a: number, b: number) => number } = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

export const getOperationResult = (
  first: number,
  operator: string,
  second: number
): number | null => {
  if (map[operator]) {
    return map[operator](first, second);
  }
  return null;
};

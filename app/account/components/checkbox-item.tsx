export interface CheckboxItemProps {
  name: string;
  label: string;
  value: boolean;
  onChange?: any;
}
export default function CheckboxItem(props: CheckboxItemProps) {
  return (
    <div className='relative flex gap-x-3 py-3'>
      <div className='flex h-6 items-center'>
        <input
          id={props.name}
          name={props.name}
          checked={props.value}
          onChange={(e) => props.onChange(e.target.name, e.target.checked)}
          type='checkbox'
          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
        />
      </div>
      <div className='text-sm leading-6'>
        <label htmlFor={props.name} className='font-medium'>
          {props.label}
        </label>
      </div>
    </div>
  );
}

export interface CustomInputProps {
  name: string;
  label: string;
  value: string;
  onChange?: any;
}

export default function CustomInput(props: CustomInputProps) {
  return (
    <div>
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <label
            htmlFor={props.name}
            className='block text-sm font-medium leading-6'
          >
            {props.label}
          </label>
        </div>

        <div>
          <input
            type='text'
            name={props.name}
            id={props.name}
            value={props.value}
            onChange={props.onChange}
            className='block w-full rounded-md border-0 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>
    </div>
  );
}

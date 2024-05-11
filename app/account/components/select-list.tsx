import CheckboxItem from '@/app/account/components/checkbox-item';

export interface ListItem {
  name: string;
  label: string;
}

export interface SelectListProps {
  objects: ListItem[];
  legend: string;
  name: string;
  onChange?: any;
  value: string[];
}

export default function SelectList(props: SelectListProps) {
  const res = new Set(props.value);
  const onChange = (name: string, value: boolean) => {
    if (value) {
      res.add(name);
    } else {
      res.delete(name);
    }
    props.onChange({ target: { value: Array.from(res), name: props.name } });
  };
  return (
    <fieldset>
      <legend className='text-sm font-semibold leading-6'>
        {props.legend}
      </legend>
      <div className='mt-6 grid grid-cols-2'>
        {props.objects.map((object: ListItem, i: number) => (
          <CheckboxItem
            name={object.name}
            value={res.has(object.name)}
            onChange={onChange}
            label={object.label}
            key={i}
          />
        ))}
      </div>
    </fieldset>
  );
}

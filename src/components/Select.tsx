type Base = {
  id: string;
};

type SelectProps<TValue extends Base> = {
  values: TValue[];
  onChange: (value: TValue) => void;
  labelKey: keyof TValue;
  className?: string;
};

const Select = <TValue extends Base>({
  values,
  onChange,
  labelKey,
  className,
}: SelectProps<TValue>) => {
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = values.find((value) => value.id === e.target.value);

    if (val) onChange(val);
  };

  return (
    <div className="form-element">
      <select onChange={onSelectChange} className={className}>
        {values.map((value) => (
          <option key={value.id} value={value.id}>
            {String(value[labelKey])}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

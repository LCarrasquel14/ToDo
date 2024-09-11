import Select, { SingleValue } from "react-select";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  onchange: (value: string | undefined) => void;
  required?: boolean;
  defaultValue: {
    label: string;
    value: string;
    id: string;
  };
};

const SelectComponent = ({
  options,
  onchange,
  required,
  defaultValue,
}: Props) => {
  const onSelectOption = (
    selectedOption: SingleValue<{ label: string; value: string }>
  ) => {
    onchange(selectedOption?.value);
  };

  return (
    <Select
      options={options}
      onChange={onSelectOption}
      required={required}
      defaultValue={defaultValue}
    />
  );
};

export default SelectComponent;

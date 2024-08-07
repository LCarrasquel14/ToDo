import Select, { SingleValue } from "react-select";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  onchange: (value: string | undefined) => void;
};

const SelectComponent = ({ options, onchange }: Props) => {
  const onSelectOption = (
    selectedOption: SingleValue<{ label: string; value: string }>
  ) => {
    onchange(selectedOption?.value);
  };
  return <Select options={options} onChange={onSelectOption} />;
};

export default SelectComponent;

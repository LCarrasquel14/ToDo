const Input = ({
  name,
  type,
  value,
  onChange,
  required,
}: {
  name: string;
  type: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input
        className="shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={name}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;

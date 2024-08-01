const Input = ({
  name,
  type,
  value,
  onChange,
}: {
  name: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input
        className="shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={name}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

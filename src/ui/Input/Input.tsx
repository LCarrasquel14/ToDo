const Input = ({
  name,
  type,
  onchange,
}: {
  name: string;
  type: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input
        className="shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={name}
        required
        onChange={onchange}
      />
    </div>
  );
};

export default Input;

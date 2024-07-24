const Input = ({ name, type }: { name: string; type: string }) => {
  return (
    <div>
      <input
        className="shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={name}
        required
      />
    </div>
  );
};

export default Input;

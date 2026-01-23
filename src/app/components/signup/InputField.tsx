type InputFieldProps = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  iconPath: string;
};

export function InputField({
  id,
  name,
  type,
  placeholder,
  iconPath,
}: InputFieldProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={iconPath}
          />
        </svg>
      </div>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-[#f5f5f5] px-4 py-4 pl-12 text-sm text-gray-700 placeholder:text-gray-400  focus:outline-black"
      />
    </div>
  );
}

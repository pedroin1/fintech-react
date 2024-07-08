import { ComponentProps, useId } from "react";

export default function InputComponent({
  label,
  type,
  placeholder,
  className,
  ...props
}: InputProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        className="block py-small px-[.75rem] font-bold text-color_1 bg-color_4 rounded-2xl"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`py-small px-[.75rem] border-none outline-none bg-color_4 font-semibold rounded-2xl border-black ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

interface InputProps extends ComponentProps<"input"> {
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
}

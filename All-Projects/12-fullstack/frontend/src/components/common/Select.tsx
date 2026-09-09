import { ChevronDown } from "lucide-react";
import type { ChangeEvent, SelectHTMLAttributes } from "react";

export type SelectOption<T extends string = string> = {
  value: T;
  label: string;
};

export interface SelectProps<T extends string = string>
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value"> {
  options: readonly SelectOption<T>[] | SelectOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label?: string;
  ariaLabel?: string;
}

export function Select<T extends string = string>({
  options,
  value,
  onChange,
  label,
  ariaLabel,
  className = "",
  id,
  disabled,
  ...rest
}: SelectProps<T>) {
  const selectId =
    id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as T);
  };

  const selectElement = (
    <span className="relative inline-block w-full">
      <select
        id={selectId}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        aria-label={ariaLabel || label}
        className={`appearance-none w-full bg-white border border-stone-300 rounded-md py-1.5 pl-3 pr-8 text-sm text-stone-800 shadow-xs cursor-pointer outline-none transition-all
          focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600 hover:border-stone-400
          disabled:bg-stone-100 disabled:text-stone-400 disabled:cursor-not-allowed
          ${className}`}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        aria-hidden="true"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none"
      />
    </span>
  );

  if (label) {
    return (
      <label htmlFor={selectId} className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-stone-700">{label}</span>
        {selectElement}
      </label>
    );
  }

  return selectElement;
}
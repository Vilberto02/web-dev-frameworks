import { type LucideIcon, Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "default" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  icon?: LucideIcon;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  ariaLabel?: string;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  default:
    "bg-blue-800 text-white hover:bg-blue-900 border border-transparent shadow-xs focus-visible:ring-blue-700",
  ghost:
    "bg-transparent text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-transparent focus-visible:ring-stone-400",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 border border-transparent shadow-xs focus-visible:ring-red-600",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-2.5 py-1 gap-1",
  md: "px-3 py-1.5 gap-1.5",
  lg: "px-4 py-2 gap-2",
};

const ICON_SIZES: Record<ButtonSize, number> = {
  sm: 14,
  md: 18,
  lg: 20,
};

export function Button({
  label,
  children,
  icon: Icon,
  variant = "default",
  size = "md",
  isLoading = false,
  type = "button",
  className = "",
  ariaLabel,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const content = children ?? label;
  const accessibleName =
    ariaLabel || (typeof content === "string" ? content : undefined);
  const isButtonDisabled = disabled || isLoading;
  const iconSize = ICON_SIZES[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isButtonDisabled}
      aria-label={accessibleName}
      aria-busy={isLoading ? "true" : undefined}
      className={`rounded-md text-sm cursor-pointer inline-flex items-center justify-center font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
      {...rest}
    >
      {isLoading ? (
        <Loader2 size={iconSize} className="animate-spin" aria-hidden="true" />
      ) : (
        Icon && <Icon size={iconSize} aria-hidden="true" />
      )}
      {content && <span>{content}</span>}
    </button>
  );
}
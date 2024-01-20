import React from "react";
import clsx from "clsx";

export interface ButtonProps {
  type?: "primary" | "secondary" | "soft";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  leadingIcon?: React.ElementType;
  trailingIcon?: React.ElementType;
  rounded?: boolean;
  isIconOnly?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  size = "sm",
  children,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  rounded = false,
  isIconOnly = false,
  disabled = false,
  ...rest
}) => {
  const baseStyles =
    "rounded-lg font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 shadow-inner ring-1 ring-slate-900/10";
  const typeStyles = {
    primary: clsx(
      "text-white bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600",
      "dark:bg-blue-500 dark:hover:bg-blue-400",
      disabled && "bg-blue-200 dark:bg-blue-300" // Styles for disabled state
    ),
    secondary: clsx(
      "text-gray-900 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-300",
      "dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:ring-0",
      disabled && "bg-gray-100 dark:bg-white/5 text-gray-400" // Styles for disabled state
    ),
    soft: clsx(
      "text-blue-600 bg-blue-50 hover:bg-blue-100",
      disabled && "bg-blue-200 text-blue-300"
    ),
  };
  const sizeStyles = {
    xs: "px-2 py-1 text-xs",
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-3.5 py-2.5 text-sm",
    xl: "px-4 py-2.5 text-sm",
  };
  const roundedStyle = rounded ? "rounded-lg-full" : "";
  const iconOnlyStyle = isIconOnly ? "p-1 text-white" : "";

  return (
    <button
      type="button"
      className={clsx(
        baseStyles,
        typeStyles[type],
        sizeStyles[size],
        roundedStyle,
        iconOnlyStyle,
        disabled && "opacity-50 cursor-not-allowed",
        rest.className
      )}
      disabled={disabled}
      {...rest}
    >
      {LeadingIcon && (
        <LeadingIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {!isIconOnly && children}
      {TrailingIcon && (
        <TrailingIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;

import React, { FC, ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps {
  type?: "primary" | "secondary" | "soft" | "red";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  leadingIcon?: React.ElementType;
  trailingIcon?: React.ElementType;
  rounded?: boolean;
  isIconOnly?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type = "primary",
  size = "sm",
  children,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  rounded = false,
  isIconOnly = false,
  disabled = false,
  className,
  onClick,
  ...rest
}) => {
  const baseStyles = clsx(
    "rounded-lg font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 shadow-inner",
    {
      primary: clsx(
        "text-white bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600  ",
        "dark:bg-blue-500 dark:hover:bg-blue-400",
        disabled && "bg-blue-200 dark:bg-blue-300"
      ),
      secondary: clsx(
        "text-gray-900 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-300",
        "dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:ring-gray-500",
        disabled && "bg-gray-100 dark:bg-white/5 text-gray-400"
      ),
      soft: clsx(
        "text-blue-600 bg-blue-50 hover:bg-blue-100",
        disabled && "bg-blue-200 text-blue-300"
      ),
      red: clsx(
        "text-white bg-red-600 hover:bg-red-500 focus-visible:outline-red-600",
        "dark:bg-red-500 dark:hover:bg-red-400",
        disabled && "bg-red-200 dark:bg-red-300"
      ),
    }[type]
  );

  const sizeStyles = {
    xs: "px-2 py-1 text-xs",
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-3.5 py-2.5 text-sm",
    xl: "px-4 py-2.5 text-sm",
  }[size];

  const roundedStyle = rounded ? "rounded-lg-full" : "";
  const iconOnlyStyle = isIconOnly ? "p-1 text-white" : "";
  const contentStyle = isIconOnly ? "flex items-center" : "";

  return (
    <button
      type="button"
      className={clsx(
        baseStyles,
        sizeStyles,
        roundedStyle,
        iconOnlyStyle,
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <div className={contentStyle}>
        {LeadingIcon && (
          <LeadingIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        )}
        {!isIconOnly && children}
        {TrailingIcon && (
          <TrailingIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        )}
      </div>
    </button>
  );
};

export default Button;

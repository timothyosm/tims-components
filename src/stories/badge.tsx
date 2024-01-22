import React from "react";

export interface BadgeProps {
  color:
    | "gray"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "blue"
    | "purple"
    | "pink";
  withDot?: boolean;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ color, withDot = false, children }) => {
  const baseStyles =
    "inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium ring-1 ring-inset";
  const colorStyles = {
    gray: "text-gray-600 bg-gray-50 ring-gray-500/10 dark:text-gray-400 dark:bg-gray-400/10 dark:ring-gray-400/20",
    red: "text-red-700 bg-red-50 ring-red-600/10 dark:text-red-400 dark:bg-red-400/10 dark:ring-red-400/20",
    yellow:
      "text-yellow-800 bg-yellow-50 ring-yellow-600/20 dark:text-yellow-500 dark:bg-yellow-400/10 dark:ring-yellow-400/20",
    green:
      "text-green-700 bg-green-50 ring-green-600/20 dark:text-green-400 dark:bg-green-500/10 dark:ring-green-500/20",
    blue: "text-blue-700 bg-blue-50 ring-blue-700/10 dark:text-blue-400 dark:bg-blue-400/10 dark:ring-blue-400/30",
    purple:
      "text-purple-700 bg-purple-50 ring-purple-700/10 dark:text-purple-400 dark:bg-purple-400/10 dark:ring-purple-400/30",
    pink: "text-pink-700 bg-pink-50 ring-pink-700/10 dark:text-pink-400 dark:bg-pink-400/10 dark:ring-pink-400/20",
  };

  return (
    <span className={`${baseStyles} ${colorStyles[color]}`}>
      {withDot && (
        <svg
          className="h-1.5 w-1.5 fill-current mr-1.5"
          viewBox="0 0 6 6"
          aria-hidden="true"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
      )}
      {children}
    </span>
  );
};

export default Badge;

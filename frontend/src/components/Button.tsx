import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({
  children,
  type = 'button',
  isLoading = false,
  fullWidth = false,
  onClick,
  variant = 'primary',
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
}
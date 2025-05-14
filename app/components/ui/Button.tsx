'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'emergency';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  icon,
  fullWidth = false,
}: ButtonProps) {
  // Base styles
  const baseStyles = 'rounded-full font-medium transition-all flex items-center justify-center gap-2';
  
  // Size variations
  const sizeStyles = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-sm',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20',
    text: 'text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20',
    emergency: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
  };
  
  // Width style
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // Disabled style
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}
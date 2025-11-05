import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 border-2 btn-primary'
  
  const variantStyles = {
    primary: {
      backgroundColor: 'var(--var-button-bg)',
      color: 'var(--var-button-text-color)',
      borderColor: 'var(--var-button-border)',
      hover: 'hover:opacity-90 hover:scale-105'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--var-button-text-color)',
      borderColor: 'var(--var-button-border)',
      hover: 'hover:bg-gray-800'
    }
  }

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm rounded-lg',
    md: 'px-8 py-4 text-lg rounded-lg',
    lg: 'px-12 py-5 text-xl rounded-lg'
  }

  const widthStyles = fullWidth ? 'w-full' : ''

  const currentVariant = variantStyles[variant]
  const currentSize = sizeStyles[size]

  const combinedStyles = `
    ${baseStyles}
    ${currentSize}
    ${widthStyles}
    ${currentVariant.hover}
    ${className}
  `.trim()

  // Extract style from props to avoid passing it through
  const { style: customStyle, ...restProps } = props

  // Merge custom styles with variant styles
  // Default styles are applied first, then custom styles can override
  const mergedStyle: React.CSSProperties = {
    backgroundColor: currentVariant.backgroundColor,
    color: currentVariant.color,
    borderColor: currentVariant.borderColor,
    ...(customStyle as React.CSSProperties || {}),
  }
  
  // Ensure text color is not inherited from parent - explicitly set it
  if (!customStyle?.color) {
    mergedStyle.color = currentVariant.color
  }
  if (!customStyle?.borderColor) {
    mergedStyle.borderColor = currentVariant.borderColor
  }

  return (
    <button
      className={combinedStyles}
      style={mergedStyle}
      {...restProps}
    >
      {children}
    </button>
  )
}


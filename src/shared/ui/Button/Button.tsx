import type { ButtonProps } from './types';
import styles from './Button.module.scss';

export const Button = ({
  className,
  children,
  disabled = false,
  size,
  onClick,
  ...props
}: ButtonProps) => (
  <button
    className={`${styles.button} ${className} ${size ? styles[`button--${size}`] : ''}`}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

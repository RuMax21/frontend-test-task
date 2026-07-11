import type { FormFieldProps } from './types';
import styles from './FormField.module.scss';

export function FormField({
  label,
  error,
  type = 'text',
  className,
  ...inputProps
}: FormFieldProps) {
  return (
    <div className={`${styles.field} ${className}`}>
      <label className={styles.label}>{label}</label>
      <input
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        type={type}
        {...inputProps}
      />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
}

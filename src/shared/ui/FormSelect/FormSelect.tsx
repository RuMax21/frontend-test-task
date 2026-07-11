import type { FormSelectProps } from './types';
import styles from './FormSelect.module.scss';

export function FormSelect({
  label,
  options,
  className,
  ...props
}: FormSelectProps): React.ReactNode {
  return (
    <div className={`${styles.field} ${className}`}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} {...props}>
        {options.map(element => (
          <option key={element.value} value={element.value}>
            {element.label}
          </option>
        ))}
      </select>
    </div>
  );
}

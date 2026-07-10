import type { BadgeProps } from './types';
import styles from './Badge.module.scss';

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return (
    <div className={`${styles.badge} ${styles[`badge--${tone}`]}`}>
      {children}
    </div>
  );
}

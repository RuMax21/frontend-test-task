import { Link } from 'react-router';
import styles from './NavBar.module.scss';

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__inner}>
        <span className={styles.nav__title}>Frontend Test Task</span>
        <div className={styles.nav__links}>
          <Link to="/" className={styles.nav__link}>
            Mini Store
          </Link>
          <Link to="/team" className={styles.nav__link}>
            Team Page
          </Link>
        </div>
      </div>
    </nav>
  );
}

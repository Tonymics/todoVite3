import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

export function Header() {
  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} role="navigation">
        <Link to="/" className={styles.logo} aria-label="Home">
          Todo App
        </Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/error-test" className={styles.navLink}>Test Error</Link>
          <Link to="/non-existent" className={styles.navLink}>Test 404</Link>
        </div>
      </nav>
    </header>
  );
}
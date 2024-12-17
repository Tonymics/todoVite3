import styles from './Layout.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
    </footer>
  );
}
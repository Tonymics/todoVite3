import PropTypes from 'prop-types';
import styles from './TodoList.module.css';

export function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search todos..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.searchInput}
      aria-label="Search todos"
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';

export function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div 
      className={styles.pagination}
      role="navigation"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className={styles.pageButton}
        aria-label="Previous page"
      >
        Previous
      </button>
      <span className={styles.pageInfo} aria-current="page">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className={styles.pageButton}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
import { useState } from 'react';
import styles from './ErrorTest.module.css';

export function ErrorTest() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('This is a test error!');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error Boundary Test Page</h1>
      <p className={styles.description}>
        Click the button below to trigger an error and test the Error Boundary.
      </p>
      <button
        onClick={() => setShouldError(true)}
        className={styles.button}
        aria-label="Trigger test error"
      >
        Trigger Error
      </button>
    </div>
  );
}
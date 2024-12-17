import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTodoById } from '../../services/todoApi';
import styles from './TodoDetail.module.css';

function TodoDetail() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        const data = await getTodoById(id);
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!todo) {
    return <div className={styles.error}>Todo not found</div>;
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>← Back to List</Link>
      
      <div className={styles.todoDetail}>
        <h1 className={styles.title}>Todo #{todo.id}</h1>
        
        <div className={styles.info}>
          <p className={styles.description}>{todo.title}</p>
          
          <div className={styles.status}>
            <span className={styles.label}>Status:</span>
            <span className={`${styles.badge} ${todo.completed ? styles.completed : styles.pending}`}>
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
          
          <div className={styles.userId}>
            <span className={styles.label}>User ID:</span>
            <span>{todo.userId}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
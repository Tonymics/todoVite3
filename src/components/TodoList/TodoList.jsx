import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../../services/todoApi';
import { SearchBar } from './SearchBar';
import { FilterSelect } from './FilterSelect';
import { Pagination } from './Pagination';
import styles from './TodoList.module.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const { todos: fetchedTodos, total } = await getTodos(currentPage);
        setTodos(fetchedTodos);
        setTotalPages(Math.ceil(total / 10));
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [currentPage]);

  const filteredTodos = todos
    .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
    .filter(todo => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'incomplete') return !todo.completed;
      return true;
    });

  if (loading) {
    return (
      <div className={styles.loading} role="status" aria-live="polite">
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Todo List</h1>
      
      <div className={styles.controls}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterSelect value={filter} onChange={setFilter} />
      </div>

      <div 
        className={styles.todoList}
        role="list"
        aria-label="Todo items"
      >
        {filteredTodos.map(todo => (
          <Link 
            to={`/todo/${todo.id}`}
            key={todo.id}
            className={styles.todoItem}
            role="listitem"
          >
            <span 
              className={`${styles.status} ${todo.completed ? styles.completed : ''}`}
              aria-label={todo.completed ? 'Completed' : 'Pending'}
            />
            <span className={styles.title}>{todo.title}</span>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default TodoList;
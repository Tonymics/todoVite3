import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Layout } from './components/Layout/Layout';
import TodoList from './components/TodoList/TodoList';
import TodoDetail from './components/TodoDetail/TodoDetail';
import { ErrorTest } from './pages/ErrorTest/ErrorTest';
import { NotFound } from './pages/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
            <Route path="/error-test" element={<ErrorTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
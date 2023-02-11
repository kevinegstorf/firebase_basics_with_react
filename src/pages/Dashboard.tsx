import { useState } from 'react';
import { Navigation } from '../components';

export const Dashboard = () => {
  const [todos, setTodos] = useState<string[]>(['todo1', 'todo2']);
  return (
    <div>
      <Navigation />
      <div>Navbar /sign out/ </div>
      <h1>DASHBOARD</h1>
      <div>create new todo</div>
      {todos.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}
    </div>
  );
};

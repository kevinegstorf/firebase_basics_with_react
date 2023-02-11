import { useState } from 'react';
import { Navigation } from '../components';

export const Dashboard = () => {
  const [todos, setTodos] = useState<string[]>(['todo1', 'todo2']);
  return (
    <div>
      <Navigation pageName="Dashboard" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 shadow-md m-5 rounded">
            <h2>Welcome user</h2>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 shadow-md m-5 rounded"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {todos.map((todo) => (
            <div className="bg-white p-6 shadow-md">
              <h2 className="text-lg font-bold mb-4">{todo}</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate diam nec eros laoreet bibendum.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

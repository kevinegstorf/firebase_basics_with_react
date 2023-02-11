import { useState } from 'react';
import { Navigation } from '../components';

export const Dashboard = () => {
  const [todos, setTodos] = useState<string[]>(['todo1', 'todo2']);
  return (
    <>
      <Navigation pageName="Dashboard" />
      <div className="container mx-auto m-5">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 shadow-md mb-5 mt-5 rounded">
            <h2>Welcome user</h2>
            <h3>Datum</h3>
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
          <a href="">
            <div className="p-6 shadow-md hover:bg-teal-300">
              <h2 className="text-lg font-bold mb-4">Taak toevoegen +</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components';

export const Dashboard = () => {
  const [todos, setTodos] = useState<string[]>([
    'todo 1',
    'todo 2',
    'todo 3',
    'todo 4',
    'todo 5',
  ]);
  return (
    <>
      <Navigation pageName="Dashboard" />
      <div className="container mx-auto m-5">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 shadow-md mb-5 mt-5 hover:shadow-xl rounded">
            <h2>Welcome user</h2>
            <h3>Datum</h3>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h3>Todos done 5 🔥🔥🔥🔥🔥</h3>
            <h4>Prio Todo: nr 5</h4>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {todos.map((todo) => (
            <Link to={todo}>
              <div className="bg-yellow-200 p-6 shadow-sm hover:shadow-xl">
                <h2 className="text-lg font-bold mb-4">{todo}</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vulputate diam nec eros laoreet bibendum.
                </p>
              </div>
            </Link>
          ))}
          <Link to="/dashboard/new">
            <div className="p-6 shadow-md hover:bg-teal-300 hover:shadow-xl">
              <h2 className="text-lg font-bold mb-4">
                Taak toevoegen <span className="text-teal-600">+</span>
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

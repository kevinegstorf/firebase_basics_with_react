import { useEffect, useState } from 'react';
import { Link, useNavigate, redirect } from 'react-router-dom';
import { Navigation } from '../../components';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const Dashboard = () => {
  const now = Date.now();
  const [todos, setTodos] = useState<string[]>([
    'Boodschappen',
    'stappen nieuwe website',
    'vakantie lijstje',
    'klusjes',
  ]);
  const auth = getAuth();
  const user = auth.currentUser;
  const navigation = useNavigate();

  const [_isAuthenticated, setIsAuthenticated] = useState(false);

  const date = new Date();

  useEffect(() => {
    if (user == null) {
      navigation('/');
    }

    const auth = getAuth();
    const listener = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticated(!!user);
    });

    return () => {
      listener();
    };
  }, [user, navigation]);

  return (
    <>
      <Navigation pageName="Dashboard" />
      <div className="container mx-auto m-5">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 shadow-md mb-5 mt-5 transition duration-500 hover:shadow-xl rounded">
            <h2>
              Welcome:{' '}
              <span className="text-lg font-bold">{user?.displayName}</span>
            </h2>
            <h3>Date: {date.toDateString()}</h3>
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
              <div className="bg-yellow-200 p-6 transition duration-300 shadow-sm hover:shadow-xl">
                <h2 className="text-lg font-bold mb-4">{todo}</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vulputate diam nec eros laoreet bibendum.
                </p>
              </div>
            </Link>
          ))}
          <Link to="/dashboard/new">
            <div className="p-6 transition duration-500 shadow-md hover:shadow-xl">
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

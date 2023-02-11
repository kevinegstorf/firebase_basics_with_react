import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '../components';

export const Todo = () => {
  let { id } = useParams();

  const [subStaken, setSubStaken] = useState<string[]>([
    'substake 1',
    'substake 2',
    'substake 3',
    'substake 4',
    'substake 5',
  ]);
  return (
    <div>
      <Navigation pageName={id ? id : 'New Todo'} />
      <div className="container mx-auto m-5">
        <div className="grid grid-cols-1 gap-4" style={{ height: '30em' }}>
          <div className="bg-white p-6 shadow-md mb-5 mt-5 rounded">
            <h2>Subtaken {subStaken.length}</h2>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h2 className="text-lg font-bold mb-4">
              Subtaak toevoegen <span className="text-teal-600">+</span>
              {subStaken.map((subStake) => (
                <div>{subStake}</div>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

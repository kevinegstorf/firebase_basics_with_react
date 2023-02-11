import { useParams } from 'react-router-dom';
import { Navigation } from '../components';

export const Todo = () => {
  let { id } = useParams();
  return (
    <div>
      <Navigation pageName={id ? id : 'New Todo'} />
      <div className="container mx-auto m-5">
        <div className="grid grid-cols-1 gap-4" style={{ height: '30em' }}>
          <div className="bg-white p-6 shadow-md mb-5 mt-5 rounded">
            <h2>Subtaken 0</h2>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

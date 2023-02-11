import { useParams } from 'react-router-dom';
import { Navigation } from '../components';

export const Todo = () => {
  let { id } = useParams();
  return (
    <div>
      <Navigation pageName={id ? id : 'New Todo'} />
    </div>
  );
};

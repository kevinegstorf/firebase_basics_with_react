import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '../../components';

export const Todo = () => {
  let { id } = useParams();
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [addTask, setAddTask] = useState<boolean>(false);
  const [createTask, setCreateTask] = useState<string>('');

  const [subTasks, setSubTasks] = useState<string[]>([]);

  const handleTask = () => {
    setSubTasks([...subTasks, createTask]);
    setCreateTask('');
  };

  return (
    <div>
      <Navigation pageName={id ? id : title ? title : 'New Todo'} />
      <div className="container mx-auto m-5">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div className="bg-white p-6 transition duration-300 shadow-sm hover:shadow-xl mb-5 mt-5 rounded">
            <label
              className="block text-gray-700 font-medium mb-2 text-left"
              htmlFor="Title"
            >
              Title
            </label>
            <input
              type="Title"
              name="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="w-full p-3 border border-gray-400 rounded-lg outline-teal-500"
              id="Title"
              required
            />
            <label
              className="block text-gray-700 font-medium mb-2 text-left"
              htmlFor="Description"
            >
              Description
            </label>
            <input
              type="Description"
              name="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="w-full p-3 border border-gray-400 rounded-lg outline-teal-500"
              id="Description"
              required
            />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h2>Subtaken {subTasks.length}</h2>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h2
              className="text-lg font-bold mb-4"
              onClick={() => setAddTask(!addTask)}
            >
              Subtaak toevoegen{' '}
              <span className="text-teal-600">{addTask ? '-' : '+'}</span>
            </h2>
            {addTask && (
              <div className="flex">
                <div className="flex-1">
                  <label
                    className="block text-gray-700 font-medium mb-2 text-left"
                    htmlFor="subTask"
                  >
                    Add Sub Taak
                  </label>
                  <input
                    type="subTask"
                    name="subTask"
                    value={createTask}
                    onChange={(event) => setCreateTask(event.target.value)}
                    className="w-full p-3 border border-gray-400 rounded-lg outline-teal-500 mr-2"
                    id="subTask"
                    required
                  />
                </div>

                <button
                  type="button"
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded h-10 mt-10 ml-2 flex-3"
                  onClick={() => handleTask()}
                >
                  Add
                </button>
              </div>
            )}
          </div>
          <div className="bg-yellow-200 p-6 transition duration-300 shadow-sm hover:shadow-xl mb-5 mt-5 rounded">
            <h3 className="text-lg font-bold">Taken:</h3>
            <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700"></hr>
            {subTasks.length === 0 && (
              <p>
                Voeg taak toe door <span className="text-teal-600">+</span> te
                drukken aan de linkerkant
              </p>
            )}
            {subTasks.map((subStake) => (
              <div className="flex justify-start mb-4">
                <div>
                  <input
                    className="mr-2 leading-tigh flex-5"
                    type="checkbox"
                    title={subStake}
                  />
                </div>
                <div className="flex-1">{subStake}</div>
                <div className="flex-2" style={{ marginTop: '-8px' }}>
                  <button
                    type="button"
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded ml-2 "
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded ml-2 "
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FireBaseApp from '../../firebase';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [signUp, setSignUp] = useState(false);
  const auth = getAuth(FireBaseApp);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (signUp) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSignUp = (event: any) => {
    event.preventDefault();
    setSignUp(!signUp);
  };

  return (
    <form
      onSubmit={(E) => handleSubmit(E)}
      className="bg-white p-6 rounded-lg shadow-xl"
    >
      <h1 className="text-center">{signUp ? 'Sign Up' : 'Sign In'}</h1>
      {signUp && (
        <>
          <label
            className="block text-gray-700 font-medium mb-2 text-left"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="username"
            name="username"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            className="w-full p-3 border border-gray-400 rounded-lg"
            id="username"
          />
        </>
      )}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2 text-left"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-3 border border-gray-400 rounded-lg"
          id="email"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-medium mb-2 text-left"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-3 border border-gray-400 rounded-lg"
          id="password"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-600 text-white font-medium w-full p-3 rounded-lg"
      >
        {signUp ? 'Register' : 'Login'}
      </button>
      <div className="flex">
        <div className="flex-start ">
          <button
            className="mr-4 hover:underline"
            onClick={(e) => toggleSignUp(e)}
          >
            {signUp ? 'Sign In' : 'Sign Up'}
          </button>
          <a className="hover:underline" href="">
            Forgot Password
          </a>
        </div>
      </div>
    </form>
  );
};

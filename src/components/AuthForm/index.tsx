import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FireBaseApp from '../../firebase';

export const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const auth = getAuth(FireBaseApp);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (signUp) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = await auth.currentUser;
        if (user) {
          updateProfile(user, {
            displayName,
          });
        }

        navigate('/dashboard');
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.code);
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
            className="w-full p-3 border border-gray-400 rounded-lg outline-teal-500"
            id="username"
            required
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
          className="w-full p-3 border border-gray-400 rounded-lg outline-teal-500"
          id="email"
          required
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
          className="w-full p-3 border border-gray-400 rounded-lg outline-teal-500"
          id="password"
          required
        />
      </div>
      <p className="text-red-400">{error && error}</p>
      <button
        type="submit"
        className="bg-teal-500 transition duration-500 hover:bg-teal-600 text-white font-medium w-full p-3 rounded-lg"
      >
        {signUp ? 'Register' : 'Login'}
      </button>
      <div className="flex">
        <div className="flex-start ">
          <button
            className="mr-4 transition duration-500 hover:underline"
            onClick={(e) => toggleSignUp(e)}
          >
            {signUp ? 'Sign In' : 'Sign Up'}
          </button>
          <button
            className="transition duration-500 hover:underline"
            onClick={() => sendPasswordResetEmail(auth, email)}
          >
            Forgot Password
          </button>
        </div>
      </div>
    </form>
  );
};

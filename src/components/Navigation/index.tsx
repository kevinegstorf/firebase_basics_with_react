export const Navigation = () => {
  return (
    <nav className="bg-teal-300 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-white text-2xl font-bold">
            Tada!
          </a>
        </div>
        <div className="flex items-center">
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => console.log('sign out')}
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

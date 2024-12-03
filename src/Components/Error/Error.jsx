import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="text-center px-44 py-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-xl font-bold text-gray-700">Oops! Page not found</p>
        <Link to="/" className="mt-6  btn bg-blue-200">
          Go back to Home
        </Link>
      </div>

    </div>
  );
};

export default Error;
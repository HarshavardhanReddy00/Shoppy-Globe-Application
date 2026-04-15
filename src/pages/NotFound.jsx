import { useRouteError, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  // ✅ Dynamic values with fallback
  const status = error?.status || 404;
  const message =
    error?.statusText ||
    error?.message ||
    "Oops! The page you are looking for does not exist.";

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-lime-400">
      
      {/* Status Code */}
      <h1 className="text-6xl font-bold text-red-500">{status}</h1>

      {/* Message */}
      <p className="mt-4 text-lg text-gray-600">{message}</p>

      {/* Extra Info */}
      <p className="text-sm text-gray-400 mt-2">
        The page might have been not there or the URL is incorrect.
      </p>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Home
        </Link>

      </div>
    </div>
  );
}


import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex-colo gap-7 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <h1 className="lg:text-4xl font-bold text-rose-600">404</h1>
      <h1 className="lg:text-4xl font-bold text-rose-600">Page Not Found</h1>
      <p className="font-medium leading-6 italic text-rose-300">
        The page does not exist. Please try again
      </p>
      <Link
        to="/"
        className="bg-subMain transitions text-white font-medium  py-3 hover:text-main px-6 rounded-md"
      >
        Return to Homepage
      </Link>
    </div>
  );
}

export default NotFound;

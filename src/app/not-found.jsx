import React from "react";

const notFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
          404
        </h1>

        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Page Not Found
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default notFound;

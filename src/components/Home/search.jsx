import React from "react";

const Search = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-3 w-full max-w-xl px-5 py-3 bg-white-900 rounded-full shadow-lg border border-black-1000">
        
        {/* Input */}
        <input
          type="text"
          placeholder="input sentence to search"
          className="flex-1 bg-transparent text-black-200 placeholder-black-400 outline-none text-sm"
        />

        {/* Mic Icon */}
        <button className="text-gray-400 hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 1v11m0 0a3 3 0 003-3V5a3 3 0 10-6 0v4a3 3 0 003 3zm0 0v4m-4 0h8"
            />
          </svg>
        </button>

        {/* Airplane Button */}
        <button className="bg-black text-white rounded-full p-2 hover:scale-105 transition active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.5 19.5l19-7.5-19-7.5v6l13 1.5-13 1.5v6z" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default Search;
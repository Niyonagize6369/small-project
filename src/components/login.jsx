import React from "react";

function login() {
  return (
    <div>
      <div className="pt-20">
        <h3
          className="text-3xl text-center 
          text-gray-900"
        >
          Login
        </h3>

        <div className="block mb-10 text-center">
          <label className="block mb-2 text-white">UserName</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            className="bg-white border border-gray-900 rounded-full w-96 p-2
                 focus:outline-none text-black focus:border-gray-900"
          />
          <label className="block mb-2 text-white">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Enter your Password"
            className="bg-white border border-gray-900 rounded-full w-96 p-2
                 focus:outline-none text-black focus:border-gray-900"
          />
        </div>
        <div className="flex gap-3 justify-center">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2
             text-white rounded-full shadow-lg bg-gradient-to-r
              from-gray-700
               to-orange-500 hover:scale-105"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default login;

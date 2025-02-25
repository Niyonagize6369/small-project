import React from "react";

function Registration() {
  return (
    <div>
      <div className="pt-20 ">
        <h1
          className="text-3xl bold 
            text-gray-900 text-center"
        >
          REGISTRATION FORM
        </h1>
      </div>

      <div className="block mb-10 text-center">
        <label className="block mb-2 text-white">Enter Your FirstName</label>

        <input
          type="text"
          name="FName"
          placeholder="Enter YourFirst Name"
          className="bg-white border border-gray-900 rounded-full w-96 p-2
                 focus:outline-none text-black focus:border-gray-900"
        />
        <label className="block mb-2 text-white">Enter Your SecondName</label>

        <input
          type="text"
          name="SName"
          placeholder="Enter Your SecondName"
          className="bg-white border border-gray-900 rounded-full w-96 p-2
                 focus:outline-none text-black focus:border-gray-900"
        />
        <label className="block mb-2 text-white">Enter Your UserName</label>

        <input
          type="text"
          name="UName"
          placeholder="Enter Your UserName"
          className="bg-white border border-gray-900 rounded-full w-96 p-2
                 focus:outline-none text-black focus:border-gray-900"
        />

        <label className="block mb-2 text-white">Enter Your Email</label>

        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          className="bg-white border border-gray-900 rounded-full w-96 p-2
                 focus:outline-none text-black focus:border-gray-900"
        />

        <div className="flex gap-5 justify-center pt-5 ">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2
             text-white rounded-full shadow-lg bg-gradient-to-r
              from-gray-700
               to-orange-500 hover:scale-105"
          >
            Register
          </button>
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

export default Registration;

import React from "react";

function header() {
  return (
    <div>
      <div className="pt-20 ">
        <h1
          className="sm:text-2xl bold bg-slate-500
            text-gray-900 text-center"
        >
          REGISTRATION FORM
        </h1>
      </div>

      <div className="block mb-2">
        <label className="block mb-2">Enter Your FirstName</label>

        <input
          type="text"
          name="FName"
          placeholder="Enter YourFirst Name"
          className="bg-gray-800 border border-gray-600 rounded w-full p-2
                 focus:outline-none focus:border-blue-900"
        />
        <label className="block mb-2">Enter Your SecondName</label>

        <input
          type="text"
          name="SName"
          placeholder="Enter Your SecondName"
          className="bg-gray-800 border border-gray-600 rounded w-full p-2
                 focus:outline-none focus:border-blue-900"
        />
        <label className="block mb-2">Enter Your UserName</label>

        <input
          type="text"
          name="UName"
          placeholder="Enter Your UserName"
          className="bg-gray-800 border border-gray-600 rounded w-full p-2
                 focus:outline-none focus:border-blue-900"
        />

        <label className="block mb-2">Enter Your FirstName</label>

        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          className="bg-gray-800 border border-gray-600 rounded w-full p-2
                 focus:outline-none focus:border-blue-900"
        />
        
      </div>
    </div>
  );
}

export default header;

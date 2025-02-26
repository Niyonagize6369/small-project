import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [user, setUser] = useState({
    FName: "",
    SName: "",
    UName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !user.email ||
      !user.password ||
      !user.FName ||
      !user.SName ||
      !user.UName
    ) {
      setError("All fields are required!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <div className="pt-20">
      <h2 className="text-3xl font-bold text-gray-200 text-center">
        REGISTRATION FORM
      </h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="block mb-10 text-center">
        <label className="block mb-2 text-white">First Name</label>
        <input
          type="text"
          name="FName"
          placeholder="Enter Your First Name"
          value={user.FName}
          onChange={handleChange}
          className="bg-white border border-gray-900 rounded-full w-96 p-2 focus:outline-none text-black focus:border-gray-900"
        />

        <label className="block mb-2 text-white">Second Name</label>
        <input
          type="text"
          name="SName"
          placeholder="Enter Your Second Name"
          value={user.SName}
          onChange={handleChange}
          className="bg-white border border-gray-900 rounded-full w-96 p-2 focus:outline-none text-black focus:border-gray-900"
        />

        <label className="block mb-2 text-white">User Name</label>
        <input
          type="text"
          name="UName"
          placeholder="Enter Your User Name"
          value={user.UName}
          onChange={handleChange}
          className="bg-white border border-gray-900 rounded-full w-96 p-2 focus:outline-none text-black focus:border-gray-900"
        />

        <label className="block mb-2 text-white">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={user.email}
          onChange={handleChange}
          className="bg-white border border-gray-900 rounded-full w-96 p-2 focus:outline-none text-black focus:border-gray-900"
        />

        <label className="block mb-2 text-white">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={user.password}
          onChange={handleChange}
          className="bg-white border border-gray-900 rounded-full w-96 p-2 focus:outline-none text-black focus:border-gray-900"
        />

        <div className="flex gap-5 justify-center pt-5">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-lg bg-gradient-to-r from-gray-700 to-orange-500 hover:scale-105"
          >
            Register
          </button>

          {/* <button
            type="button"
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-lg bg-gradient-to-r from-gray-700 to-orange-500 hover:scale-105"
          >
            Login
          </button> */}
        </div>

        <p className="text-sm text-center text-gray-200 mt-3">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

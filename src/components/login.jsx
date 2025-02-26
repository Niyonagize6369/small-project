import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      !storedUser ||
      storedUser.email !== loginData.email ||
      storedUser.password !== loginData.password
    ) {
      setError("Invalid email or password!");
      return;
    }

    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div className="pt-20">
      <h3 className="text-3xl text-center text-gray-200">Login</h3>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleLogin} className="block mb-10 text-center">
        <label className="block pt-5 text-white">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={loginData.email}
          onChange={handleChange}
          className="bg-white border border-gray-900 rounded-full w-96 p-2 focus:outline-none text-black focus:border-gray-900"
        />

        <label className="block mb-2 text-white">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={loginData.password}
          onChange={handleChange}
          className="bg-white border border-gray-900 rounded-full w-96 p-2 focus:outline-none text-black focus:border-gray-900"
        />

        <div className="flex gap-3 justify-center mt-5">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-lg bg-gradient-to-r from-gray-700 to-orange-500 hover:scale-105"
          >
            Login
          </button>
        </div>
      </form>

      <p className="text-sm text-center text-gray-200 mt-3">
        Don't have an account?{" "}
        <a href="/" className="text-blue-500">
          Register
        </a>
      </p>
    </div>
  );
}

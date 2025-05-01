import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/login", values)
      .then((res) => {
        console.log("Response Status:", res.status);
        if (res.status === 200) {
          alert("Login successful!");
          navigate("/Main"); // Use navigate function for redirection
          console.log("Login successful, response data:", res.data);
        } else if(res.status === 401){
          alert(`Login attempt on this Email not found: ${res.status}`);
        }else if(res.status === 402){
          alert(`Invalid credentials: ${res.status}`);

        }
      })
      .catch((err) => {
        console.log("Error:", err);
        if (err.response && err.response.data && err.response.data.message) {
          alert(`Login failed: ${err.response.data.message}`);
        } else {
          alert("Login failed due to a network error or other issue.");
        }
      });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="w-full max-w-sm bg-white p-8 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="input-style w-full border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="input-style w-full border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

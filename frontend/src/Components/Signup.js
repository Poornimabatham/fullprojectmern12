import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    number: "",
    address: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(values, "values");
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/signup", values)
      .then((res) => {
        console.log("Response Status:", res.status);
        if (res.status === 200) {
          alert("Signup successful!");
          navigate("/"); // Use navigate function for redirection
          console.log("Login successful, response data:", res.data);
        } else if(res.status == 400){
          alert(`Passwords do not match: ${res.status}`);

        }
        else if(res.status == 409) {
          alert(`User already exists: ${res.status}`);
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
    <div className="min-h-screen grid place-items-center px-4 bg-white-100 dark:bg-white-900">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
        style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)' }} // Adjust 0.2 for opacity

        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              className="input-style"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="lname"
              value={values.lname}
              onChange={handleChange}
              className="input-style"
              placeholder="Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="number"
              value={values.number}
              onChange={handleChange}
              className="input-style"
              placeholder="123-45-678"
              //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>

          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              id="website"
              name="address"
              value={values.address}
              onChange={handleChange}
              className="input-style"
              placeholder="123 Main St"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="input-style"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="input-style"
            placeholder="•••••••••"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="cpassword"
            value={values.cpassword}
            onChange={handleChange}
            className="input-style"
            placeholder="•••••••••"
            required
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

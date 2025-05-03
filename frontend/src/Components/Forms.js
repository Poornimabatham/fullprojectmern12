import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Forms() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    queries: "",
  });
  const navigate = useNavigate(); // Use useNavigate hook

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
      .post("http://localhost:3000/api/v1/contact", values)
      .then((res) => {
        console.log("Response Status:", res.status);
        if (res.status === 200) {
          alert("Message successfully Send!");
          navigate("/Main"); // Use navigate function for redirection
          setValues({
            fname: "",
            lname: "",
            email: "",
            address: "",
            queries: "",
          });
          console.log("Login successful, response data:", res.data);
        } else if (res.status == 400) {
          alert(`Passwords do not match: ${res.status}`);
        } else if (res.status == 409) {
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
    <div className="container">
      <div className="text">Contact us Form</div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>First Name</label>
          </div>
          <div className="input-data">
            <input
              type="text"
              name="lname"
              value={values.lname}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>Last Name</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>Email Address</label>
          </div>
          <div className="input-data">
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label>Address</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data textarea">
            <textarea
              rows="8"
              name="queries"
              value={values.queries}
              onChange={handleChange}
              required
            ></textarea>
            <div className="underline"></div>
            <label>Write your message</label>
          </div>
        </div>

        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

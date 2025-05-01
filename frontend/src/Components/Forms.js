import React from "react";

export default function Forms() {
  return (
    <div className="container">
      <div className="text">Contact us Form</div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label>First Name</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label>Last Name</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data">
            <input type="email" required />
            <div className="underline"></div>
            <label>Email Address</label>
          </div>
          <div className="input-data">
            <input type="url" required />
            <div className="underline"></div>
            <label>Website Name</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" required></textarea>
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

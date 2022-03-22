import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const url = "http://localhost:5000";
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email_id: "",
    pwd: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`${url}/users/${credentials.email_id}`)
      .then(function (response) {
        // console.log(response.data);
        if (response.data === "") {
          alert(`User with email Id "${credentials.email_id} doesn't exist."`);
        } else {
          if (response.data.pwd === credentials.pwd) {
            localStorage.setItem("pwd", credentials.pwd);
            navigate("/");
          } else {
            alert("Wrong Credentials");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="container mt-3"
      style={{ paddingLeft: "20%", paddingRight: "20%" }}
    >
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            name="email_id"
            type="email"
            class="form-control"
            id="email_id"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            name="pwd"
            type="password"
            class="form-control"
            id="pwd"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>

        <button type="submit" class="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

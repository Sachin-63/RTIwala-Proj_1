import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const url = "http://localhost:5000";
  let navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email_id: "",
    pwd: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const searchRes = axios.get(`${url}/users/${newUser.email_id}`);
    // console.log(searchRes);

    axios
      .get(`${url}/users/${newUser.email_id}`)
      .then(function (response) {
        // console.log(response.data);
        if (response.data === "") {
          if (newUser.phone.length == 10) {
            axios
              .post(`${url}/user`, newUser)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            localStorage.setItem("pwd", newUser.pwd);
            navigate("/");
          }
        } else {
          alert(`User with email Id - "${newUser.email_id}" already exist.`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
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
          <label for="exampleInputEmail1" class="form-label">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            class="form-control"
            id="phone"
            pattern="[0-9]{10}"
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

export default Signup;

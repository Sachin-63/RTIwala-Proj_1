import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  let navigate = useNavigate();
  const url = "http://localhost:5000";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("pwd")) {
      axios
        .get(`${url}/users`)
        .then(function (response) {
          console.log(response);
          setUsers(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="display-4 text-warning mt-2 d-flex justify-content-center">
            All Customers
          </h1>
        </div>
        <div className="container">
          <table class="table-dark table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">PhoneNumber</th>
              </tr>
            </thead>
            <tbody>
              {users.map((element, index) => {
                return (
                  <tr>
                    <th scope="row ">{index + 1}</th>
                    <td>{element.email_id}</td>
                    <td>{element.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

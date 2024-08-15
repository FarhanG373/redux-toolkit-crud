import React, { useEffect } from "react";
import s from "./Components.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../ReduxToolkit/userSlice";
import { Link } from "react-router-dom";
const UserList = ({ itemShow }) => {
  const dispatch = useDispatch();
  const { data = [], status } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (status === "loading") {
    <h2>Loading...</h2>;
  } else if (status === "ideal") {
    return (
      <div>
        <h2>User List</h2>
        {itemShow && <Link to="/users">View All</Link>}
        <table border="1" style={{ width: "100%" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          {data.slice(0, itemShow).map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {item.name.firstname} {item.name.lastname}
                </td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.phone}</td>
                <td>
                  {item.address.number}, {item.address.street},{" "}
                  {item.address.city}-{item.address.zipcode}
                </td>
                <td>
                  <Link to={`/singleUser/${item.id}`}>View</Link>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
};

export default UserList;

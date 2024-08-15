import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../ReduxToolkit/userSlice";
const SingleUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data = [], status } = useSelector((state) => state.users);
  const [singleUser, setSingleUser] = useState();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getUser());
      setSingleUser(data[id - 1]);
    }, 2000);
  }, [dispatch, id]);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Issue with data...</div>;
  }
  if (status === "ideal") {
    return (
      <div>
        <h1>
          {singleUser?.name.firstname} {singleUser?.name.lastname}
        </h1>
        <p>{singleUser?.username}</p>
        <p>{singleUser?.password}</p>
        <p>{singleUser?.email}</p>
        <p>{singleUser?.phone}</p>
      </div>
    );
  }
};

export default SingleUser;

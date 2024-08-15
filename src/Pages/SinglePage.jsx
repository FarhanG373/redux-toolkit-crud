import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ReduxToolkit/productSlice";

const SinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data = [], status } = useSelector((state) => state.products);
  const [singleProd, setSingleProd] = useState();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProducts());
      setSingleProd(data[id - 1]);
    }, 2000);
  }, [dispatch, id]);

  if (status === "pending") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>Issue with data...</div>;
  }
  if (status === "idle") {
    return (
      <div>
        <h1>{singleProd?.title}</h1>
        <p>{singleProd?.description}</p>
        <p>Price : {singleProd?.price}</p>
      </div>
    );
  }
};

export default SinglePage;

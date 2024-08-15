import React, { useState } from "react";
import s from "./Pages.module.scss";
import { addProduct } from "../ReduxToolkit/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [pInfo, setPinfo] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    setPinfo({ ...pInfo, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(pInfo));
    setPinfo({ pName: "", pPrice: "", pCategory: "", pDescription: "" });
    localStorage.setItem(
      "product",
      JSON.stringify({
        pId: pInfo?.pId,
        pName: pInfo?.pName,
        pPrice: pInfo?.pPrice,
        pCategory: pInfo?.pCategory,
        pDescription: pInfo?.pDescription,
      })
    );
    navigate("/products");
  };

  return (
    <div className={s.addProduct}>
      <h1>AddProduct</h1>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="Product id"
          name={`pId`}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Product Name"
          name={`pName`}
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="Price"
          name={`pPrice`}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="category"
          name={`pCategory`}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="description"
          name={`pDescription`}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../ReduxToolkit/productSlice";
import s from "./Components.module.scss";
const Filter = () => {
  const filter = useSelector((state) => state.products.filter);
  const dispatch = useDispatch();

  return (
    <>
      <input
        onChange={(e) => dispatch(setFilter(e.target.value))}
        value={filter}
        placeholder="filter by Category"
        className={s.input}
      ></input>
    </>
  );
};

export default Filter;

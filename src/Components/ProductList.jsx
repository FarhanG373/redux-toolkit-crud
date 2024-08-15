import React, { useState, useEffect } from "react";
// import s from './Components.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../ReduxToolkit/productSlice";
import { Link } from "react-router-dom";
import Filter from "./Filter";
const ProductList = ({ itemShow }) => {
  const dispatch = useDispatch();
  const { data = [], status } = useSelector((state) => state.products);
  const filterBy = useSelector((state) => state.products.filter);
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
    const storedProducts = localStorage.getItem("product");
    setPrd(storedProducts ? JSON.parse(storedProducts) : []);
  }, [dispatch]);

  if (status === "pending") {
    return <h2>Loading...</h2>;
  }
  if (status === "failed") {
    return <h2>No data...</h2>;
  }

  return (
    <>
      <h2>Product List</h2>
      <Filter />
      {itemShow && <Link to="/products">View All</Link>}&nbsp;&nbsp;&nbsp;&nbsp;
      {<Link to="/addproduct">Add Product</Link>}
      <table border="1">
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
        {prd.pId && (
          <tr key={prd.id}>
            <td>
              <img
                src={""}
                alt={""}
                style={{ width: "100px", height: "100px" }}
              />
            </td>
            <td>{prd.pName}</td>
            <td>{prd.pPrice}</td>
            <td>{prd.pDescription}</td>
            <td>{prd.pCategory}</td>
            <td>
              <Link to={`/singleProduct/${prd.pId}`}>View</Link>
              &nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  localStorage.removeItem("product");
                  window.location.reload();
                }}
              >
                delete
              </button>
            </td>
          </tr>
        )}
        {data
          .filter((product) =>
            filterBy ? product.category.includes(filterBy) : true
          )
          .slice(0, itemShow)
          .map((itm) => {
            return (
              <tr key={itm.id}>
                <td>
                  <img
                    src={itm.image}
                    alt={itm.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{itm.title}</td>
                <td>{itm.price}</td>
                <td>{itm.description}</td>
                <td>{itm.category}</td>
                <td>
                  <Link to={`/singleProduct/${itm.id}`}>View</Link>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={() => dispatch(deleteProduct(itm.id))}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        
      </table>
    </>
  );
};

export default ProductList;

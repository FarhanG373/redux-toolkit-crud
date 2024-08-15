import React from "react";
import s from "./Pages.module.scss";
import ProductList from "../Components/ProductList";
import UserList from "../Components/UserList";

const Home = () => {
  return (
    <div className={s.homePage}>
      <ProductList itemShow={5} />
      <UserList itemShow={5} />
    </div>
  );
};

export default Home;

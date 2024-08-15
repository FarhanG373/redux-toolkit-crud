import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserList from "./Components/UserList";
import ProductList from "./Components/ProductList";
import NavBar from "./Components/NavBar";
import SinglePage from "./Pages/SinglePage";
import SingleUser from "./Pages/SingleUser";
import AddProduct from "./Pages/AddProduct";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/singleProduct/:id" element={<SinglePage />} />
        <Route path="/singleUser/:id" element={<SingleUser />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;

import Products from "./components/products/Products";
import Header from "./components/header/Header";
import "./App.css";
// import ToggleBtn from "./components/ToggleBtn";
import { useEffect, useState } from "react";

const App = () => {
  const [productList, setProductList] = useState([]);
  const [filtered, setFiltered] = useState(productList);
  const [doneLoading, setDoneLoading] = useState(false);

  const filterCategories = (selected) => {
    setFiltered(
      productList.filter((item) =>
        selected === "All" ? true : item.category === selected
      )
    );
  };

  const categories = productList
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        setProductList(products);
        setFiltered(products);
        setDoneLoading(true);
      });
  }, []);

  return doneLoading ? (
    <>
      <Header categories={categories} filterCategories={filterCategories} />
      {/* <ToggleBtn /> */}
      <Products productList={filtered} />
    </>
  ) : (
    <div>loading...</div>
  );
};
export default App;

import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  let [products, setProducts] = useState([
    { name: "tshirt1", price: 1000 },
    { name: "jeans1", price: 2000 },
  ]);
  function getData() {
    axios.get('products.json')
  .then(function(res) {
    console.log(res.data);
    setProducts(res.data);
  })
  .catch(function(err){
    console.log(err);
  })
  }

  function addProduct(e) {
    e.preventDefault();
    let newProducts = products.concat({
      name: e.target.name.value,
      price: e.target.price.value,
    });

    function deleteProduct(indexToDelete) {
    alert(indexToDelete);
  }

    setProducts(newProducts);
    e.target.name.value = "";
    e.target.price.value = "";
  }
  return (
    <div>
    <h1>Ecommerce App</h1>
      <form onSubmit={addProduct}>
        <input type="text" name="name" placeholder="Enter Item" />
        <br />
        <input type="number" name="price" placeholder="Enter Price" />
        <br />
        <button>Add Product</button>
      </form>
      <h1>List of Products</h1>
      {
          products.map(function (val, index) {
            return <div>name : {val.name},Price : {val.price}
              {/* <button onClick={() => { deletitem(index) }} >Delete Item</button> */}
            </div>
          })
        }
    </div>
  );
}
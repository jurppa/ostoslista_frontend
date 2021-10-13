import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const shoppingList = await axios.get(
          "http://localhost/ostoslista/index.php"
        );
        setItems(shoppingList.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      const toDelete = { id: id };
      await axios.post("http://localhost/ostoslista/delete.php", toDelete);
      const newListAfterDelete = items.filter((a) => a.id !== id);
      setItems(newListAfterDelete);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Shopping List </h1>
      <AddItem setItems={setItems} items={items} />
      <ShoppingList items={items} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

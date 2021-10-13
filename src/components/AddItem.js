import axios from "axios";
import { useState } from "react";

const AddItem = ({ setItems, items }) => {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();

  const handleAdd = async () => {
    if (!description || !amount) {
      alert("Please give values first");
    } else {
      const newItem = {
        description: description,
        amount: amount,
      };
      try {
        const sentData = await axios.post(
          "http://localhost/ostoslista/add.php",
          newItem
        );
        setItems([sentData.data, ...items]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      New Item{" "}
      <input
        placeholder="type description"
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <input placeholder="amount" onChange={(e) => setAmount(e.target.value)} />{" "}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;

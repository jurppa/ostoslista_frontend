const ShoppingList = ({ items, handleDelete }) => {
  if (items.length > 0) {
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          {items.map((a, index) => (
            <li key={index}>
              Description: <b>{a.description}</b>
              <span style={{ marginLeft: "17px" }}>
                {" "}
                Amount: <b>{a.amount}</b>{" "}
              </span>
              <button
                onClick={() => {
                  handleDelete(a.id);
                }}
                style={{ marginLeft: "17px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>No items to show</div>;
  }
};

export default ShoppingList;

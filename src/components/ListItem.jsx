import React from "react";

const ListItem = ({ index, contact, handleDelete }) => {
  return (
    <div key={index} style={{ display: "flex", marginBottom: "8px" }}>
      <li style={{ marginRight: "16px" }}>{contact.name}</li>
      <button onClick={(e) => handleDelete(e, index)}>Remove</button>
    </div>
  );
};
export default ListItem;

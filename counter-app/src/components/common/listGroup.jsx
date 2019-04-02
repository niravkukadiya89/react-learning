import React from "react";

const ListGroup = props => {
  const { items, textProp, valueProp } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item[valueProp]} className="list-group-item">
          {item[textProp]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
import React from "react";
import Item from "./Item";

const List = ({ removeMe, name, img, price, id }) => {
  return (
    <div className="menu">
      <Item removeMe={removeMe} id={id}  name={name} img={img} price={price} />
    </div>
  );
};

export default List;

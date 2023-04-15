import React from "react";

const Item = (  { removeMe, id, name, img, price  }) => {

   
  return (
    <div className="item">
      <img src={img} alt={name} />
      <div className="item-info">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
      <button onClick={()=>removeMe(id)} className="btn-block" >remove me</button>
    </div>
  );
};

export default Item;

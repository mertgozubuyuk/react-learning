import React from "react";

function Courses({ id, title, description, price, link, image }) {
  return (
    <div>
      <div className="card"> 
        <img src={image} width={250} height={150} />
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h3>{price}</h3>
        <a href={link}>Satın alma için tıklayınız</a>
      </div>
    </div>
  );
}

export default Courses;

import React, { useState } from 'react';

import cardStyle from './Card.module.css';

const Card = ({title, content, image}) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${cardStyle.card} ${isActive ? cardStyle.active : ''}`}>
      <figure>
        <img src={image} alt="" />
        <figcaption className={cardStyle.figcaption}>
          <h2 className={cardStyle.cardTitle}>{title}</h2>
          <p>{content}</p>
        </figcaption>
      </figure>
      <button className={cardStyle.btn} onClick={handleButtonClick}>
        <h4>Leggi di più</h4>
      </button>
    </div>
  );
};

export default Card;

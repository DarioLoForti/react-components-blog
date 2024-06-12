import React, { useState } from 'react';

import cardStyle from './Card.module.css';

const Card = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${cardStyle.card} ${isActive ? cardStyle.active : ''}`}>
      <figure>
        <img src="https://kinsta.com/it/wp-content/uploads/sites/2/2023/04/react-must-be-in-scope-when-using-jsx.jpg" alt="React" />
        <figcaption className={cardStyle.figcaption}>
          <h2 className={cardStyle.cardTitle}>Card Title</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptates fuga sit modi dicta. Animi nihil perspiciatis id atque nostrum velit culpa voluptas dolore iste.</p>
        </figcaption>
      </figure>
      <button className={cardStyle.btn} onClick={handleButtonClick}>
        <h4>Leggi di più</h4>
      </button>
    </div>
  );
};

export default Card;

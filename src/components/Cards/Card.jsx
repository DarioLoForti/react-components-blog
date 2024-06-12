import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default Card;

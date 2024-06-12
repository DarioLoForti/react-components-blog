import cardStyle from './Card.module.css';

const Card = () => {    
    return (
        <div className={cardStyle.card}>
            <figure>
                <img src="https://via.placeholder.com/400x200" alt="placeholder" />
                <figcaption className={cardStyle.figcaption}>
                    <h2 className={cardStyle.cardTitle}>Card Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, perspiciatis. Reiciendis optio est vero quibusdam, tenetur corporis nihil laborum perferendis, quis maxime eum corrupti nesciunt officiis? Saepe officia, architecto blanditiis quibusdam asperiores, provident corporis ipsa placeat non voluptas, commodi eligendi!</p>
                </figcaption>
            </figure>
            <button className={cardStyle.btn}>
                <h4>Leggi di più</h4>
            </button>
        </div>
    )
}

export default Card;
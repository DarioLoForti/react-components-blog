import cardStyle from './Card.module.css';

const Card = () => {    
    return (
        <div className={cardStyle.card}>
            <figure>
                <img src="https://via.placeholder.com/400x200" alt="placeholder" />
                <figcaption className={cardStyle.figcaption}>
                    <h2 className={cardStyle.cardTitle}>Card Title</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptates fuga sit modi dicta. Animi nihil perspiciatis id atque nostrum velit culpa voluptas dolore iste.</p>
                </figcaption>
            </figure>
            <button className={cardStyle.btn}>
                <h4>Leggi di più</h4>
            </button>
        </div>
    )
}

export default Card;
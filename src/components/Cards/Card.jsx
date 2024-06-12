import cardStyle from './Card.module.css';

const Card = () => {    
    return (
        <div className={cardStyle.card}>
            <figure>
                <img src="https://kinsta.com/it/wp-content/uploads/sites/2/2023/04/react-must-be-in-scope-when-using-jsx.jpg" />
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
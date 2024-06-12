const Card = () => {    
    return (
        <div className="card">
            <figure>
                <img src="https://via.placeholder.com/600x400" alt="placeholder" />
                <figcaption>
                    <h2 className="cardTitle">Card Title</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, perspiciatis. Reiciendis optio est vero quibusdam, tenetur corporis nihil laborum perferendis, quis maxime eum corrupti nesciunt officiis? Saepe officia, architecto blanditiis quibusdam asperiores, provident corporis ipsa placeat non voluptas, commodi eligendi!</p>
                </figcaption>
            </figure>
            <button className="btn">
                <h4>Leggi di più</h4>
            </button>
        </div>
    )
}

export default Card;
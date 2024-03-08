import './Card.css'

const Card = ({ children }) => {
    return (
        <div class="p-5 rounded mt-3">
            {children}
            <p class="lead">This example is a quick exercise to illustrate how the bottom navbar works.</p>
        </div>
    )
}

export default Card;
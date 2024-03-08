import './UserItem.css'
import Avatar from "../../shared/components/Avatar"
import { Link } from 'react-router-dom/cjs/react-router-dom';
const UserItem = (props) => {
    return (
        <div className='col user-item'>
            <Link to={`/${props.id}/place`}>
                <div className="card">
                    <div className='user-item__image'>
                        <Avatar image={props.image} alt={props.image} className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className='card-text fs-b'>{props.placeCount} {props.placeCount === 1 ? "place" : "places"}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default UserItem;
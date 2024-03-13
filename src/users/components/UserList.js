import Card from '../../shared/components/Card';
import UserItem from './UserItem'
import './UserList.css'

const UserList = (props) => {
    const fullName = ({ first_name, last_name }) => {
        return first_name + " " + last_name;
    }
    if (props.items.length === 0) {
        return (
            <Card>
                <h2>No users found.</h2>
            </Card>
        )
    }

    return (
        <div className='container'>
            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5'>
                {/* color febe11 */}
                {props.items.map(user => (
                    <UserItem
                        id={user.id}
                        key={user.id}
                        name={fullName(user)}
                        image={user.image}
                        placeCount={user.places}
                    />
                )
                )}
            </div>
        </div>
    )
}
export default UserList;
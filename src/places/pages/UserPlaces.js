import PlaceList from "../components/PlaceList";
import { useParams } from 'react-router-dom'

const DUMMY_PLACES = [
    {
        id: 1,
        title: 'Sydney Opera House',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 1
    },
    {
        id: 2,
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 1
    },
    {
        id: 3,
        title: 'Place 3 Test',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 2
    }
];

const UserPlaces = (props) => {
    const userId = useParams().userId;
    console.log(userId)
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === +userId)
    console.log(loadedPlaces)
    return (
        <>
            <PlaceList items={loadedPlaces} />
        </>
    )
}

export default UserPlaces;
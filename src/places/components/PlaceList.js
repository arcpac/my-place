import Button from '../../shared/components/Buttons/Button';
import Card from '../../shared/components/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css'
const PlaceList = (props) => {

    if (props.items.length === 0) {
        return (
            <Card>
                <h2>No places found.</h2>
                <Button to="/places/new">Add place</Button>
            </Card>
        )
    }
    return (
        <div className='container'>
            <div class="row mb-2">
                {props.items.map((place) => (
                    <PlaceItem
                        key={place.id}
                        id={place.id}
                        image={place.imageUrl}
                        title={place.title}
                        decription={place.description}
                        address={place.address}
                        creator={place.creator}
                        coordinates={place.location}
                    />
                ))}
            </div>
        </div>
    )
}

export default PlaceList;
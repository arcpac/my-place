import { useParams } from "react-router-dom/cjs/react-router-dom"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import Input from "../../shared/components/Input/Input";
import Button from "../../shared/components/Buttons/Button";
import './PlaceForm.css'
import { useForm } from "../../shared/hooks/form-hook";
import { useEffect } from "react";

const DUMMY_PLACES = [
    {
        id: 1,
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
        id: 2,
        title: 'Location number 2',
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
        title: '10/2-4 Pitt Street',
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
const UpdatePlace = (props) => {
    const placeId = useParams().placeId

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: "",
            isValid: false
        },
        description: {
            value: "",
            isValid: false
        }
    }, false)

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === parseInt(placeId))

    useEffect(() => {
        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            })
        }
    }, [setFormData, identifiedPlace])

    const updateSubmitHandler = (event) => {
        event.preventDefault();

        console.log(formState.inputs)
    }

    if (!identifiedPlace) {
        return (
            <div>
                No place
            </div>
        )
    }

    return (<>
        Update place {placeId}
        <form className="form-control" onSubmit={updateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                type="text"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description"
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>Update place</Button>
        </form>
    </>)
}

export default UpdatePlace
import { useCallback, useReducer } from "react";
import Button from "../../shared/components/Buttons/Button";
import Input from "../../shared/components/Input/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import { useForm } from "../../shared/hooks/form-hook";

const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs) // send to backend
    }
    return (
        <div className="container">
            <div class="row justify-content-md-center">
                <div className="col-auto">
                    <form className="place-form" onSubmit={placeSubmitHandler}>
                        <Input
                            id="title"
                            element="input"
                            type="text"
                            label="Title"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid title."
                            onInput={inputHandler} />
                        <Input
                            id="description"
                            element="textarea"
                            label="Description"
                            validators={[VALIDATOR_MINLENGTH(5)]}
                            errorText="Please enter a valid description (at least 5 characters)."
                            onInput={inputHandler}
                        />
                        <Input
                            id="address"
                            element="input"
                            label="Address"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a valid address."
                            onInput={inputHandler}
                        />
                        <Button type='submit' disabled={!formState.isValid}>Add Place</Button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default NewPlace;
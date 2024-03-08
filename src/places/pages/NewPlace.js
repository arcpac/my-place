import Button from "../../shared/components/Buttons/Button";
import Input from "../../shared/components/Input/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";

const NewPlace = () => {
    return (
        <div className="container">

            <div class="row justify-content-md-center">
                <div className="col-auto">
                    <form className="place-form">
                        <Input type="text" placeholder="Location" label="Location" id="location" element="input" validators={[VALIDATOR_REQUIRE()]} errorText="Invalid input"/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default NewPlace;
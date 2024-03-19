import { useState } from "react"
import Button from "../../shared/components/Buttons/Button"
import Input from "../../shared/components/Input/Input"
import { useForm } from "../../shared/hooks/form-hook"
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/utils/validators"
import './Auth.css'

const Auth = () => {
    const [loginMode, setLogInMode] = useState(true)

    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    })

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formState)
    }

    const switchHandler = () => {
        setLogInMode(prevMode => !prevMode)
    }
    console.log(formState.isValid)

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card shadow login-card">
                        <div className="p-5">
                            <form onSubmit={submitHandler}>
                                {
                                    !loginMode &&
                                    <Input
                                        element="input"
                                        id="name"
                                        type="text"
                                        label="Name"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a valid Name"
                                        onInput={inputHandler}
                                    />
                                }
                                <Input
                                    element="input"
                                    id="email"
                                    type="email"
                                    label="E-mail"
                                    validators={[VALIDATOR_EMAIL()]}
                                    errorText="Please enter a valid email address"
                                    onInput={inputHandler}
                                />
                                <Input
                                    element="input"
                                    id="password"
                                    type="password"
                                    label="Password"
                                    validators={[VALIDATOR_MINLENGTH(5)]}
                                    errorText="Invalid password"
                                    onInput={inputHandler}
                                />
                            </form>
                            <div className="row justify-content-md-center my-3">
                                <div className="col-auto">
                                    <Button type="submit" className="btn btn-warning" disabled={!formState.isValid}>{loginMode ? "Login" : "Signup"}</Button>
                                </div>
                            </div>
                        </div>
                        <Button inverse onClick={switchHandler}>Switch sign up</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Auth
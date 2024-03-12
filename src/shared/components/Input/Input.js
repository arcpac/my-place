import { useEffect, useReducer } from "react";
import { validate } from "../../utils/validators";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true,
            }
        default:
            break;
    }
}

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer,
        {
            value: props.initialValue || '',
            isTouched: false,
            isValid: props.initialValid || false
        }
    )

    const { id, onInput } = props
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput])

    const changeHandler = event => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators })
    }
    const touchHandler = event => {
        dispatch({ type: 'TOUCH', isTouched: false })
    }

    const element =
        props.element === 'input' ?
            (
                <input id={props.id} type={props.type} placeholder={props.placeholder} className={`form-control`} onChange={changeHandler} value={inputState.value}
                    onBlur={touchHandler}
                />
            )
            :
            (
                <textarea id={props.id} rows={props.row || 3} onChange={changeHandler} value={inputState.value} onBlur={touchHandler} />
            );

    return (
        <div className={`form-control`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}

            {!inputState.isValid && inputState.isTouched && <div class="alert alert-info" role="alert">
                {props.errorText}
            </div>}
        </div>
    )
}

export default Input;
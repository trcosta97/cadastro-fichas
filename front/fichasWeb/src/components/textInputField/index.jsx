import { TextInput } from "../../styled/TextInput"

const TextInputField = (props) => {
    return (
        <div>
            <TextInput>

                <label>{props.label}</label>
                <input required={props.necessary} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />

            </TextInput>
        </div>

    )
}

export default TextInputField
import { ChangeEventHandler } from "react"
import { DefaultCustomInput } from "../../components"

interface Props {
    name: string,
    type: string,
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}


const InputGroup: React.FC<Props> = (props) => {
    return (
        <div className="flex items-center mb-3">
            <label htmlFor={props.name} className="uppercase text-lg w-3/12">{props.name}</label>
            <DefaultCustomInput onChange={props.onChange} className="w-full" type={props.type} name={props.name} classNameChild="py-2 rounded w-full" />
        </div>
    )
}

export default InputGroup

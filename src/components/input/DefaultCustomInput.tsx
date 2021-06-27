import { ChangeEventHandler } from "react"

interface Props {
    icon?: string,
    placeholder?: string,
    type: string,
    name: string,
    required?: boolean,
    className?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

const DefaultCustomInput: React.FC<Props> = (props) => {
    return (
        <div className={`${props.className} flex mx-4 px-4`}>
            {props.icon && <img src={props.icon} alt={`Logo ${props.placeholder}`} />}
            <input required={props.required} name={props.name} onChange={props.onChange} type={props.type} className="focus:outline-none px-3" placeholder={props.placeholder} />
        </div>
    )
}

export default DefaultCustomInput

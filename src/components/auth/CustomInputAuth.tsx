import { ChangeEventHandler } from "react"

interface Props {
    icon: string,
    placeholder: string,
    type: string,
    name: string,
    required: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
}

const CustomInputAuth: React.FC<Props> = (props) => {
    return (
        <div className="bg-defaultGray flex p-3 rounded-md mb-5">
            <img src={props.icon} alt={`Logo ${props.placeholder}`} />
            <input required={props.required} name={props.name} onChange={props.onChange} type={props.type} className="w-full drop-shadow-lg bg-transparent focus:outline-none px-5 text-gray-50 placeholder-gray-50 text-xl font-normal" placeholder={props.placeholder} />

        </div>
    )
}

export default CustomInputAuth



interface Props {
    className?: string,
    name: string,
    disabled? : boolean
}
const DefaultButton: React.FC<Props> = ({className, name, disabled}) => {

    return (
        <button disabled={disabled} className={`w-full default-box-shadow rounded-md uppercase text-white block py-3 ${disabled ? "bg-gray-400" : "bg-defaultRed"} ${className}`}>
            {disabled ? "Loading..." : name}
        </button>
    )
}

export default DefaultButton

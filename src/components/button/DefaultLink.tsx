import { Link } from "react-router-dom";


interface Props {
    className?: string,
    name: string,
    to: string,
}
const DefaultLink: React.FC<Props> = ({ className, name, to }) => {

    return (
        <Link to={to} className={`w-full default-box-shadow rounded-md uppercase text-white block py-3  bg-defaultRed ${className}`}>
            {name}
        </Link>
    )
}

export default DefaultLink;

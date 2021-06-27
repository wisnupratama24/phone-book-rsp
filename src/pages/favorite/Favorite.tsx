import { Link, RouteComponentProps } from "react-router-dom"
import { Add } from "../../assets"
import { Navbar } from "../../components"
import { ADD_CONTACT_PATH } from "../../constants/Routes"
import Content from "../home/Content"


const Favorite: React.FC<RouteComponentProps> = (props) => {
    return (
        <div className="bg-grayBackground h-screen">
            <Navbar />
            <div className="p-5">
                <div className="md:w-2/12 w-auto">
                    <Link to={ADD_CONTACT_PATH}>
                        <div className="flex gap-x-5 ml-4">
                            <img src={Add} alt="icon add" />
                            <p className="text-xl">Add Contact</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="p-5" id="favorite">
                <Content />
            </div>
        </div>
    )
}

export default Favorite

import { useSelector } from "react-redux"
import { Link, RouteComponentProps } from "react-router-dom"
import { Add } from "../../assets"
import { Navbar } from "../../components"
import { ADD_CONTACT_PATH } from "../../constants/Routes"
import { selecContact } from "../../redux/slice/Contact"
import { Contact } from "../home/contact"


const Favorite: React.FC<RouteComponentProps> = (props) => {

    const selectContact = useSelector(selecContact);
    const contactData = selectContact.contact?.data.filter((e: any) => e.favorite === true);
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
                <div className="wrapper flex justify-between px-4">
                    <Contact contactData={contactData} />
                    <div className="detail-contact flex-1">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorite

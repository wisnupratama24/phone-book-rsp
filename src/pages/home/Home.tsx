import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, RouteComponentProps } from "react-router-dom"
import { Add } from "../../assets"
import { Navbar } from "../../components"
import { ADD_CONTACT_PATH } from "../../constants/Routes"
import { getCookie } from "../../helpers/auth"
import { allContact, selecContact } from "../../redux/slice/Contact"
import { Contact } from "./contact"

export interface IContact {
    contact: {
        name: String,
        id: String,
        phone: String,
        job: String,
        company: String,
        email?: String,
        image: String,
        favorite: Boolean
    }[]
}

const Home: React.FC<RouteComponentProps> = (props) => {
    const selectContact = useSelector(selecContact);
    const contactData = selectContact.contact?.data;

    const token = getCookie('token');
    const dispatch = useDispatch();


    async function getContact() {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/contacts`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const data = await addFavorite(res.data.data);
            if (contactData == null) {
                dispatch(allContact({
                    data
                }));

            }

        } catch (error) {
            dispatch(allContact({ data: [] }));
        }
    }

    async function addFavorite(data: Array<TemplateStringsArray>) {
        return data.map(e => {
            const x = { ...e, favorite: false }
            return x;
        });
    }

    useEffect(() => {
        getContact();
    }, []);

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
            <div className="p-5" id="home">
                <div className="wrapper flex justify-between px-4">
                    <Contact contactData={contactData} />
                    <div className="detail-contact flex-1">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { RouteComponentProps } from "react-router-dom"
import { Navbar } from "../../components"
import { getCookie } from "../../helpers/auth"
import { allContact } from "../../redux/slice/Contact"
import Content from "./Content"

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
            dispatch(allContact({
                data
            }));

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
            <div className="p-5" id="home">
                <Content />
            </div>
        </div>
    )
}

export default Home

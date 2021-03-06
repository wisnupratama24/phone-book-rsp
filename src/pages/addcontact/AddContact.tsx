import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Add } from "../../assets"
import { DefaultButton, Navbar } from "../../components"
import { getCookie } from "../../helpers/auth";
import { allContact, selecContact } from "../../redux/slice/Contact";
import InputGroup from "./InputGroup"

const AddContact: React.FC<RouteComponentProps> = ({ history }) => {
    const token = getCookie('token');
    const dispatch = useDispatch();
    const selectContact = useSelector(selecContact);


    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        job: "",
        company: "",
        email: "",
        image: "",
    });

    const [alert, setAlert] = useState({
        type: "",
        message: "",
    });

    const [isDisabled, setIsDisabled] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setIsDisabled(true);

        if (!formData.name || !formData.email || !formData.job || !formData.company || !formData.phone) {
            setIsDisabled(false);
            setAlert({
                type: "text-red-500",
                message: "Please fill any fields"
            })
            return;
        };


        axios.post(`${process.env.REACT_APP_API_URL}/contacts`, formData, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setIsDisabled(false);
                const response = res.data.data;
                dispatch(allContact({
                    data: [response, ...selectContact.contact.data]
                }))

                setAlert({
                    type: "text-green-500",
                    message: "Success add new contact"
                })

                setFormData({
                    name: "",
                    phone: "",
                    job: "",
                    company: "",
                    email: "",
                    image: "",
                });

            })
            .catch(err => {
                setIsDisabled(false);
                setAlert({
                    type: "text-red-500",
                    message: err.response.data
                })
            })
    }


    return (
        <>
            <Navbar />
            <div className="p-5 md:ml-12 ml-2">
                <div className="flex gap-x-5 ml-4">
                    <img src={Add} className="hidden" alt="icon add" />
                    <p className="text-xl">Add Contact</p>
                </div>
                <div className="form-add-contact my-10 ml-4 lg:w-3/5 md:w-4/5 w-full">
                    {
                        alert && <div className={`my-5 py-2 rounded-sm ${alert.type} w-auto`}> {alert.message} </div>
                    }
                    <form onSubmit={handleSubmit}>
                        <InputGroup value={formData.name} name="name" type="text" onChange={handleChange} />
                        <InputGroup value={formData.phone} name="phone" type="number" onChange={handleChange} />
                        <InputGroup value={formData.email} name="email" type="email" onChange={handleChange} />
                        <InputGroup value={formData.company} name="company" type="text" onChange={handleChange} />
                        <InputGroup value={formData.job} name="job" type="text" onChange={handleChange} />
                        <div className="flex justify-center mt-8 w-2/12 mx-auto">
                            <DefaultButton name="submit" disabled={isDisabled} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddContact

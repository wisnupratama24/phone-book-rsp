import { useSelector } from "react-redux";
import { Header } from ".";
import { Star, UserGreen } from "../../../assets";
import { selecContact } from "../../../redux/slice/Contact";


const Contact: React.FC = () => {
    const selectContact = useSelector(selecContact);
    const contactData = selectContact.contact;

    return (
        <div className="contact flex-2 bg-gray-300 shadow-md w-3/5 p-8">
            <table width="90%" className="mx-auto">
                <Header />
                <tbody>
                    {contactData && contactData.data?.length > 0 ?
                        contactData.data.map((item: any, index: any) => {
                            return (
                                <tr key={`${item.id}-${index}`} className="text-left">
                                    <td className="p-3">
                                        <div className="flex items-center">
                                            <div className="bg-gray-200 rounded-full h-10 w-10 justify-center flex items-center">
                                                <img src={UserGreen} alt="Default Contact Pic" className="m-auto" />
                                            </div>
                                            <div className="ml-5 text-xl capitalize">
                                                {item.name}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="capitalize">
                                        {item.company}
                                    </td>
                                    <td className="capitalize">
                                        {item.phone}
                                    </td>
                                    <td>
                                        {item.favorite === true ?
                                            <Star color="black" id={item.id} /> : <Star color="none" id={item.id} />}
                                    </td>

                                </tr>
                            );
                        }) :
                        <tr >
                            <td>
                                <p>Loading</p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contact

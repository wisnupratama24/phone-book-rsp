import { DefaultCustomInput } from ".."
import { Search } from "../../assets"

const Navbar = () => {
    return (
        <div className="p-5 bg-defaultDarkBlue text-white">
            <div className="navbar flex justify-between px-4">
                <div className="left uppercase">
                    <ul className="flex justify-evenly gap-10">
                        <li>
                            contact
                        </li>
                        <li>
                            favourite
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <DefaultCustomInput type="text" name="search" icon={Search} className="bg-white ml-3 py-1 rounded-sm text-black" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

import { Link, useLocation } from "react-router-dom"
import { DefaultCustomInput } from ".."
import { Search } from "../../assets"
import { FAVORITE_PATH, HOME_PATH } from "../../constants/Routes"

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="bg-defaultDarkBlue text-white">
            <div className="navbar flex justify-between px-4">
                <div className="left uppercase">
                    <ul className="flex justify-evenly gap-x-10">
                        <li className={`${pathname === HOME_PATH ? 'border-b-8 border-white' : ''} py-5`}>
                            <Link to={HOME_PATH}>
                                contact
                            </Link>
                        </li>
                        <li className={`${pathname === FAVORITE_PATH ? 'border-b-8 border-white' : ''} py-5`}>
                            <Link to={FAVORITE_PATH}>
                                favorite
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="right py-5">
                    <DefaultCustomInput type="text" name="search" icon={Search} className="bg-white ml-3 py-1 rounded-sm text-black" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

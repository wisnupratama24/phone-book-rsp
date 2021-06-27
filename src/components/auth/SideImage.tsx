import { ContactAuth } from '../../assets'

const SideImage: React.FC = () => {
    return (
        <div className="h-screen defaultDarkBlue">
            <div className="pt-2">
                <img src={ContactAuth} alt="Animation Signin" className="h-5/6 mx-auto" />
            </div>
        </div>
    )
}

export default SideImage;


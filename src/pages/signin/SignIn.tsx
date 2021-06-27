import axios from "axios";
import { SetStateAction, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Email, Pass } from "../../assets";
import { CustomInputAuth, DefaultButton, DefaultLink, WrapperAuth } from "../../components";
import { HOME_PATH, SIGNUP_PATH } from "../../constants/Routes";
import { setCookie } from "../../helpers/auth";
import { login } from "../../redux/slice/User";
import { useDispatch } from "react-redux";


const SignIn: React.FC<RouteComponentProps> = ({ history }) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState<SetStateAction<string | null>>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch();


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setIsDisabled(true);

        if (!formData.email || !formData.password) {
            setIsDisabled(false);
            setErrorMessage("Please fill any fields");
            return;
        };


        axios.post(`${process.env.REACT_APP_API_URL}/signin`, formData)
            .then(res => {
                setIsDisabled(false);
                setFormData({
                    email: "",
                    password: "",
                });

                const result = res.data.data;
                setCookie('token', result.token);
                dispatch(login({
                    name: result.name,
                    email: result.email,
                    token: result.token
                }))
                window.location.href = HOME_PATH;
                history.push(HOME_PATH);

            })
            .catch(err => {
                setIsDisabled(false);
                setErrorMessage(err.response.data.data);
            })
    }

    return (
        <WrapperAuth title="Login" errorMessage={errorMessage}>
            <form onSubmit={handleSubmit}>
                <CustomInputAuth name="email" onChange={handleChange} icon={Email} type="text" placeholder="Email" required={true} />
                <CustomInputAuth name="password" onChange={handleChange} icon={Pass} type="password" placeholder="Password" required={true} />
                <div className="flex gap-2 mt-5">
                    <DefaultButton name="Login" disabled={isDisabled} />
                    <DefaultLink to={SIGNUP_PATH} name="Register" />
                </div>
            </form>
        </WrapperAuth>
    )
}

export default SignIn;

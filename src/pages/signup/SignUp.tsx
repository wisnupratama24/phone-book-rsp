import axios from "axios";
import React, { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Email, Pass, User } from "../../assets";
import { CustomInputAuth, DefaultButton, WrapperAuth } from "../../components";
import { setCookie } from "../../helpers/auth";
import { login } from "../../redux/slice/User";
import { HOME_PATH } from "../../constants/Routes";

const SignUp: React.FC<RouteComponentProps> = ({ history }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState<SetStateAction<string | null>>(null);

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

        if (!formData.name || !formData.email || !formData.password) {
            setIsDisabled(false);
            setErrorMessage("Please fill any fields");
            return;
        };

        if (formData.password !== formData.confirmPassword) {
            setIsDisabled(false);
            setErrorMessage("Password don't match");
            return;
        };

        axios.post(`${process.env.REACT_APP_API_URL}/signup`, formData)
            .then(res => {
                setIsDisabled(false);


                const result = res.data;
                setCookie('token', result.data);
                dispatch(login({
                    email: formData.email,
                    name: formData.name,
                    token: result.data
                }))

                window.location.href = HOME_PATH;
                history.push(HOME_PATH);

                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });

            })
            .catch(err => {
                setIsDisabled(false);
                setErrorMessage(err.response.data.data);
            })
    }

    return (
        <WrapperAuth title="Register" errorMessage={errorMessage}>
            <form onSubmit={handleSubmit}>
                <CustomInputAuth onChange={handleChange} name="name" icon={User} type="text" placeholder="Name" required={true} />
                <CustomInputAuth onChange={handleChange} name="email" icon={Email} type="text" placeholder="Email" required={true} />
                <CustomInputAuth onChange={handleChange} name="password" icon={Pass} type="password" placeholder="Password" required={true} />
                <CustomInputAuth onChange={handleChange} name="confirmPassword" icon={Pass} type="password" placeholder="Confirm Password" required={true} />
                <div className="flex gap-2 mt-5">
                    <DefaultButton name="Register" disabled={isDisabled} />
                </div>
            </form>
        </WrapperAuth>
    )
}

export default SignUp;

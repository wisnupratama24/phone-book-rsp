import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";
export const setCookie = (key: string, value: string): void => {
    if (window !== "undefiend") {
        Cookies.set(key, value, {
            expires: 1,
        });
    }
};

export const getCookie = (key: string) => {
    if (window !== "undefined") {
        return Cookies.get(key);
    }
};


export const isAuth = () => {
    if (window !== "undefined") {
        const cookieChecked = getCookie("token");
        if (cookieChecked) {
            const decode: {
                email: string
            } = jwt_decode(cookieChecked);
            if (decode.email !== null || decode.email !== undefined) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

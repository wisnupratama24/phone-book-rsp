import { Redirect, Route } from "react-router-dom"

interface Props {
    isCan: any,
    path: string,
    component: any,
    to: string,
    exact?: boolean
}

const ProtectedRoute = (props: Props) => {
    const { component: Component, isCan, to, exact = false } = props;

    return (
        <Route
            exact={exact}
            render={(routeProps) => {

                if (isCan === true) {
                    return <Component {...routeProps} />
                } else {
                    return <Redirect to={{
                        pathname: to
                    }} />
                }
            }
            }
        />
    );
};

export default ProtectedRoute;

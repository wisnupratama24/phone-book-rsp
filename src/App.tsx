
import { SetStateAction, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from './components';
import { ADD_CONTACT_PATH, FAVORITE_PATH, HOME_PATH, SIGNIN_PATH, SIGNUP_PATH } from './constants/Routes';
import { isAuth } from './helpers/auth';
import { AddContactPage, FavoritePage, HomePage, Page404, SignInPage, SignUpPage } from './pages';


function App() {
  const [isAuthState, setIsAuthState] = useState<SetStateAction<boolean | null>>(null);

  useEffect(() => {
    const checkedAuth = isAuth() ?? null;
    setIsAuthState(checkedAuth);
  }, []);

  return (
    <div className="bg-grayBackground min-h-screen h-full">
      <Router>
        <Switch>
          <ProtectedRoute exact={true} isCan={isAuthState} component={HomePage} path={HOME_PATH} to={SIGNIN_PATH} />
          <ProtectedRoute exact={false} isCan={!isAuthState} component={SignInPage} path={SIGNIN_PATH} to={HOME_PATH} />
          <ProtectedRoute exact={false} isCan={!isAuthState} component={SignUpPage} path={SIGNUP_PATH} to={HOME_PATH} />
          <ProtectedRoute exact={false} isCan={isAuthState} component={AddContactPage} path={ADD_CONTACT_PATH} to={SIGNIN_PATH} />
          <ProtectedRoute exact={false} isCan={isAuthState} component={FavoritePage} path={FAVORITE_PATH} to={SIGNIN_PATH} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

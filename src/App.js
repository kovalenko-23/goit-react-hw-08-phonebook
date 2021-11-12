import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import AppBar from './Components/AppBar/AppBar';
import operationsAuth from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublickRoute from './Components/PublickRoute';

const HomePageView = lazy(() =>
  import('./views/HomePageView' /*webpackChunkName: "home-view"*/),
);
const PhonebookView = lazy(() =>
  import('./views/PhonebookView' /*webpackChunkName: "phonebook-view"*/),
);
const RegistrationView = lazy(() =>
  import('./views/RegistrationView' /*webpackChunkName: "registration-view"*/),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /*webpackChunkName: "login-view"*/),
);

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => state.authReducer.isFetchingCurrentUser);
  useEffect(() => {
    dispatch(operationsAuth.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? <h1>Loading...</h1> : <><AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PublickRoute>
                <HomePageView />
              </PublickRoute>
            }
          />
          <Route
            exact
            path="/contacts"
            element={
              <PrivateRoute>
                <PhonebookView />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/registration"
            element={
              <PublickRoute restricted>
                <RegistrationView />
              </PublickRoute>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <PublickRoute restricted redirectTo={'/contacts'}>
                <LoginView />
              </PublickRoute>
            }
          />
        </Routes>
      </Suspense></>}
    </>
  );
}

export default App;

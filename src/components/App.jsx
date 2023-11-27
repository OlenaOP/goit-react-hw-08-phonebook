import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './Navigation/Navigation';
import Loader from './Loader';

import { StyledAppContainer } from './App.styled';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';
import RestictedRoute from './RestictedRoute';
import PrivateRoute from './PrivateRoute';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  //const isRefreshing = useSelector(selectAuthIsLoading);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <StyledAppContainer>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestictedRoute>
                <LoginPage />
              </RestictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestictedRoute>
                <RegisterPage />
              </RestictedRoute>
            }
          />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};

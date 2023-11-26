import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { List } from './List/List';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Navigation } from './Navigation/Navigation';
import Loader from './Loader';

import { StyledAppContainer } from './App.styled';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';

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
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <h2>Contacts</h2>
      {/* <List /> */}
    </StyledAppContainer>
  );
};

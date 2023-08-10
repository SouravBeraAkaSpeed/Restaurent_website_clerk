import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { SignIn, SignUp } from '@clerk/clerk-react';
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from './container';
import { Navbar } from './components';
import './App.css';

const LandingPage = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

const Login = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <SignIn />
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route
      path="/sign-in/*"
      element={<Login routing="path" path="/sign-in" />}
    />
    <Route
      path="/sign-up/*"
      element={<SignUp routing="path" path="/sign-up" />}
    />
  </Routes>
);

export default App;

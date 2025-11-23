// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import { Hello } from "./components/Hello World/Helloworld";
import Congrats from "./components/Congrats Card/Congratscard";
import Super from "./components/Super Over/Superover";
import Social from "./components/Social Button/Socialbutton";
import Menu from "./components/Menu/Menu";
import Notification from "./components/Notification/Notificationapp";
import Login from "./components/Login Design/Logindesign";
import Technology from "./components/Technology Card/Technologycard";
import Hooks from "./components/Hooks Assignment/Hooksassignment";
import FruitCounter from "./components/Fruits Counter/Fruitcounter";
import Feedback from "./components/Feedback App/Feedbackapp";
import ThankYouPage from "./components/Feedback App/Feedbackout";
import Fakestore from "./components/Fakestore API/Fakestore";
import Details from "./components/Fakestore API/Fakestoredetails";
import DateFunction from "./components/Date Function/Datefunction";

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold">404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Menu />

      {/* Main content */}
      <main>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/super" element={<Super />} />
          <Route path="/social" element={<Social />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/fruitcounter" element={<FruitCounter />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thankyoupage" element={<ThankYouPage />} />
          <Route path="/fakestore" element={<Fakestore />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/datefunction" element={<DateFunction />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

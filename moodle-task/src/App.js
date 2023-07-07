import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import "./App.css";
import { Hello } from "./components/Hello World/Helloworld";
import Congrats from "./components/Congrats Card/Congratscard";
import Super from "./components/Super Over/Superover";
import Social from "./components/Social Button/Socialbutton";
import Menu from "./components/Menu/Menu";
import Notification from "./components/Notification/Notificationapp";
import Login from "./components/Login Design/Logindesign";
import Technology from './components/Technology Card/Technologycard';
import Hooks from "./components/Hooks Assignment/Hooksassignment";
import FruitCounter from "./components/Fruits Counter/Fruitcounter";
import Feedback from "./components/Feedback App/Feedbackapp";
import ThankYouPage from "./components/Feedback App/Feedbackout";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/Congrats" element={<Congrats />} />
        <Route path="/Super" element={<Super />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Technology" element={<Technology/>} />
        <Route path="/Hooks" element={<Hooks />} />
        <Route path="/FruitCounter" element={<FruitCounter />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/ThankYouPage" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
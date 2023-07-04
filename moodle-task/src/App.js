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
      </Routes>
    </BrowserRouter>
  );
}
export default App;
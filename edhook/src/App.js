import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./Components/Registration/Registration";
import { MainPage } from "./Components/MainPage/MainPage";

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

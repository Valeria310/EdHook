import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";
import { WelcomePage } from "./Pages/WelcomePage/WelcomePage";
import { MainPage } from "./Pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => (
    <div className="container">
        {/* <Registration /> */}
        <BrowserRouter>
            <Routes>
                <Route path="/registration" element={<WelcomePage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    </div>
);

import { HashRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";
import { WelcomePage } from "./Pages/WelcomePage/WelcomePage";
import { MainPage } from "./Pages/MainPage/MainPage";
import { RolePage } from "./Pages/RolePage/RolePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GroupPage } from "./Pages/GroupPage/GroupPage";

export const App = () => {
    document.onload = () => {
        console.log("aaa");
    };
    return (
        <div className="container">
            <HashRouter>
                <Routes>
                    <Route path="/welcome" element={<WelcomePage />} />
                    <Route path="/roles" element={<RolePage />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/group" element={<GroupPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </HashRouter>
        </div>
    );
};

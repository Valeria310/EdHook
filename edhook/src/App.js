import { HashRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";
import { WelcomePage } from "./Pages/WelcomePage/WelcomePage";
import { Profile } from "./Pages/Profile/Profile";
import { RolePage } from "./Pages/RolePage/RolePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
    return (
        <div className="container">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/roles" element={<RolePage />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </HashRouter>
        </div>
    );
};

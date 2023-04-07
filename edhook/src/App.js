import { HashRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";
import { MainPage } from "./Pages/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GroupPage } from "./Pages/GroupPage/GroupPage";

export const App = () => (
  <div className="container">
    {/* <Registration /> */}
    <HashRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </HashRouter>
  </div>
);

import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp/SignUp";
import { LogIn } from "./pages/LogIn/LogIn";
import {DashboardPage} from "./pages/DashboardPage/DashboardPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<SignUp />} path={"/sign-up"} />
          <Route element={<LogIn />} path={"/log-in"} />
          <Route element={<DashboardPage />} path={"/dashboard"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

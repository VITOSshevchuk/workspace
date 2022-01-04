import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {DashboardPage} from "./pages/DashboardPage/DashboardPage";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {SignUp} from "./pages/SignUp/SignUp";
import {LogIn} from "./pages/LogIn/LogIn";
import {CreateTaskPage} from "./pages/CreateTaskPage/CreateTaskPage";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route element={ <DashboardPage/>} path={"/dashboard"}/>
                <Route element={ <SignUp/>} path={"/sign-up"}/>
                <Route element={ <LogIn/> } path={"/log-in"}/>
                <Route element={ <CreateTaskPage/> } path={"/create-task"}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

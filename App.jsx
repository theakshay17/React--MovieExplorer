import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";


function App(){
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    );
}
export default App;
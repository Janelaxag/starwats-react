import PeoplePage from "@container/PeoplePage";
import HomePage from "@container/HomePage";

import { Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/people'>People</Link>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/people' element={<PeoplePage />} />
            </Routes>
        </>
    );
};

export default App;
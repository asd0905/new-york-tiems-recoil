import { Route, Routes } from "react-router-dom"
import List from "./pages/list/List";
import Scrap from "./pages/scrap/Scrap";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<List />} />
            <Route path={'/scrap'} element={<Scrap />} />
        </Routes>
    )
}

export default Routers;
import { Route, Routes } from "react-router-dom"
import Scrap from "./pages/scrap/Scrap";
import List from "./pages/list/List";

const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<List />} />
            <Route path={'/scrap'} element={<Scrap />} />
        </Routes>
    )
}

export default Routers;
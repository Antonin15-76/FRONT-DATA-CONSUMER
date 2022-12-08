import { Route, Routes } from "react-router-dom"
import Home from "../../pages/app/data"
import Map from "../../pages/app/map"
import Infos from "../../pages/app/infos"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='infos/*' element={<Infos />} />
            <Route path='data/*' element={<Home />} />
            <Route path='map/*' element={<Map />} />
        </Routes>
    )
}

export default AppRoutes
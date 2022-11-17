import { Route, Routes } from "react-router-dom"
import Home from "../../pages/app/data"
import Infos from "../../pages/app/infos"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='infos/*' element={<Infos />} />
            <Route path='data/*' element={<Home />} />
        </Routes>
    )
}

export default AppRoutes
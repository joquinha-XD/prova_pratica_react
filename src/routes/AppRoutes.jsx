import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from '../pages/Produtos';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from "../pages/Contato"
import Login from '../pages/Login';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/Home' element={<Home/>}></Route>
                <Route path='/Produtos' element={<Produtos/>}></Route>
                <Route path='/Sobre' element={<Sobre/>}></Route>
                <Route path='/Contato' element={<Contato/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
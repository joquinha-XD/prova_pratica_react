import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png"

const Header = () => {
    return (
        <header>
            <img className="logo" src={Logo} alt="Logo Multibox" />
            <nav>
                <a href="Home">Início</a>
                <a href="Produtos">Produtos</a>
                <a href="Sobre">Sobre</a>
                <a href="Contato">Contato</a>
                <a href="Login">Login</a>
            </nav>
        </header>
    )
}

export default Header;
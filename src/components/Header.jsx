import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <img class="logo" src="../assets/logo.png" alt="Logo Multibox" />
            <nav>
                <a href="index.html">Início</a>
                <a href="produtos.html">Produtos</a>
                <a href="sobre.html">Sobre</a>
                <a href="contato.html">Contato</a>
                <a href="login.html">Login</a>
            </nav>
        </header>
    )
}

export default Header;
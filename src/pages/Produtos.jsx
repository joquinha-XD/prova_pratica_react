import Lampada from "../Assets/Lampada.jpg"
import Perfume from "../Assets/Perfume.jpg"
import Aspirador from "../Assets/Aspirador.jpg"
import "../styles/produtos.css"


const Produtos = () => {
    return (
        <main className="main-produtos">
            <h1>Todos os Produtos</h1>
            <div className="grid">
                <div className="produto">
                    <img src={Lampada} alt="Produto A" />
                    <h3>Tramontina Lâmpada</h3>
                    <p>R$32,90</p>
                </div>
                <div className="produto">
                    <img src={Perfume} alt="Produto B" />
                    <h3>Nautica Voyage Eau De Toilette Masculino 50Ml</h3>
                    <p>R$69,90</p>
                </div>
                <div className="produto">
                    <img src={Aspirador} alt="Produto C" />
                    <h3>Electrolux Aspirador pó vertical</h3>
                    <p>R$219,90</p>
                </div>
            </div>
        </main>
    )
}

export default Produtos;
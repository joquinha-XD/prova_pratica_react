import "../styles/home.css"
import Controle from "../Assets/controle.jpg"
import Volante from "../Assets/Volante.jpg"
import Fone from "../Assets/Fone.jpg"

const Home = () => {
    return (
            <main className="main-home">
                <section className="banner">
                    <h1 className="text-box">Bem-vindo à Multibox</h1>
                    <p className="text-box">Seu marketplace de produtos variados, com qualidade e agilidade!</p>
                </section>

                <section className="produtos">
                    <div className="produto">
                        <img src={Controle} alt="Produto 1" />
                        <h3>Controle Gamer</h3>
                        <p >GameSir G7 SE</p>
                    </div>
                    <div className="produto">
                        <img src={Volante} alt="Produto 2" />
                        <h3>Volante Gamer</h3>
                        <p >Volante Logitech G923 para PS5</p>
                    </div>
                    <div className="produto">
                        <img src={Fone} alt="Produto 3" />
                        <h3>Headset</h3>
                        <p >Headphone Fone de Ouvido Havit HV-H2002d</p>
                    </div>
                </section>
            </main>
    )
}

export default Home;
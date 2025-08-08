import "../styles/contato.css"

const Contato = () => {
    return (
        <main className="main-contato">
            <h1>Fale Conosco</h1>
            <form>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />

                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" rows="5" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </main>
    )
}

export default Contato;
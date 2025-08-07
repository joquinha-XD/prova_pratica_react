const Produtos = () => {
    return (
        <main>
            <h1>Todos os Produtos</h1>
            <div class="grid">
                <div class="produto">
                    <img src="./assets/Lampada.jpg" alt="Produto A" />
                    <h3>Tramontina Lâmpada</h3>
                    <p>R$32,90</p>
                </div>
                <div class="produto">
                    <img src="./assets/Perfume.jpg" alt="Produto B" />
                    <h3>Nautica Voyage Eau De Toilette Masculino 50Ml</h3>
                    <p>R$69,90</p>
                </div>
                <div class="produto">
                    <img src="./assets/Aspirador.jpg" alt="Produto C" />
                    <h3>Electrolux Aspirador pó vertical</h3>
                    <p>R$219,90</p>
                </div>
            </div>
        </main>
    )
}

export default Produtos;
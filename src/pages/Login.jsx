import "../styles/login.css"

const Login = () => {
    return (
        <main className="main-login">
            <div class="form-container">
                <h1>Entrar</h1>
                <form>
                    <label for="usuario">Usuário</label>
                    <input type="text" id="usuario" required />

                    <label for="senha">Senha</label>
                    <input type="password" id="senha" required />

                    <button type="submit">Acessar</button>
                </form>
            </div>
        </main>
    )
}

export default Login;
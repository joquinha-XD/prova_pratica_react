import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AppRoutes from "./routes/AppRoutes.jsx"

const App = () => {
    return(
        <>
            <Header/>
            <AppRoutes/>
            <Footer/>
        </>
    )
}

export default App;
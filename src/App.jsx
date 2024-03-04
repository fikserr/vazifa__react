import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./style/style.css";
import "./style/style.css"
import ContextProvider from "./context/Context";



function App() {
  return (
    <ContextProvider>
      < Header/>
      < Main/>
      < Footer/>
    </ContextProvider>
  )
}

export default App

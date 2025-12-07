import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


import Home from "./pages/Home/Home";
import Personas from "./pages/Personas/Personas";
import Jogos from "./pages/Jogos/Jogos";
import Sobre from "./pages/Sobre/Sobre";


import styles from "./App.module.css";


function App() {
return (
<div className={styles.appContainer}>
<Router>
<Navbar />
<div className={styles.pageContent}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/personas" element={<Personas />} />
<Route path="/jogos" element={<Jogos />} />
<Route path="/sobre" element={<Sobre />} />
</Routes>
</div>
<Footer />
</Router>
</div>
);
}


export default App;
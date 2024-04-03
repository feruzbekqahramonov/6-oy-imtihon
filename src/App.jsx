import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createContext, useContext, useEffect, useState } from "react";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import Home from "../src/components/Home";
import Products from "../src/components/Products";
import More from "./components/More";
import ErrorPages from "./components/ErrorPages";
import Design from "./components/Design";
import Login from "./components/Login";
import Register from "./components/Register";
export const ThemeContext = createContext();
import styles from './all.module.css'
import "./i18n.js";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const { t } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);
  {
    theme == 'light' ? document.body.style.background = '#fff' : document.body.style.background = '#272935'
}


  return (
    <div className={`${theme == 'light' ? styles.body : styles.darkbody} ${styles.body}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/products/:id" element={<Design></Design>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/more" element={<More></More>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="*" element={<ErrorPages />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

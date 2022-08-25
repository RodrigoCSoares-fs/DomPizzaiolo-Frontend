

import { BrowserRouter } from "react-router-dom";

import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import Router from "./routes/router";
import { GlobalStyle } from "./styles/global";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Router/> 
      <GlobalStyle/>
    </BrowserRouter>
  
    </>

  ); 
}

export default App

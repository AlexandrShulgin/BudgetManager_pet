import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './assets/fonts/Jost.woff'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter> 
    );
};

export default App;
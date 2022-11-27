import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './assets/fonts/Jost.woff'
import './App.css'
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from ".";
import { useState } from "react";
import { check } from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter> 
    );
});

export default App;
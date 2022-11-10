import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HistoryStore from './store/HistoryStore';
import UserStore from './store/UserStore';
import WalletStore from './store/WalletStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        wallet: new WalletStore(),
        history: new HistoryStore()
    }}>
        <App/>
    </Context.Provider>
);

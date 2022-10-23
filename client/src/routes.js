import Auth from "./pages/Auth";
import Wallet from "./pages/Wallet";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, WALLET_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: WALLET_ROUTE,
        Component: <Wallet/>,
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },

    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
]

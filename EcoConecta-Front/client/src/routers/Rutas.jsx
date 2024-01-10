import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Compra from "../pages/Compra"
import Dona from "../pages/Dona"
import Nosotros from "../pages/Nosotros"
import CardsDonaRopa from "../pages/CardsDonaRopa"

const Rutas = () => {

    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/compra',
                element: <Compra />
            },
            {
                path: '/dona',
                element: <Dona />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/dona/ropa',
                element: <CardsDonaRopa />
            },
            // {
            //     path: '/compra/:categoria',
            //     element: <Inicio />
            // },
            // {
            //     path: '/compra/:categoria/:id',
            //     element: <Inicio />
            // },
            // {
            //     path: '/dona/:categoria/:id',
            //     element: <Inicio />
            // }
        ]

    )

    return rutas
}

export default Rutas
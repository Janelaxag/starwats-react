import HomePage from "@container/HomePage";
import PeoplePage from "@container/PeoplePage";
import NotFoundPage from "@container/NotFoundPage";


const routesConfig = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/people',
        element: <PeoplePage />,
    },
    {
        path: '/not-found',
        element: <NotFoundPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

export default routesConfig
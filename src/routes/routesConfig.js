import HomePage from "@container/HomePage";
import PeoplePage from "@container/PeoplePage";
import NotFoundPage from "@container/NotFoundPage";
import PersonPage from "@container/PersonPage";


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
        path: '/people/:id',
        element: <PersonPage />,
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
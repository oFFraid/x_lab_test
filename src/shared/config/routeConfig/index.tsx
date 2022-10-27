import {RouteProps} from 'react-router-dom';
import MainPage from "../../../pages/MainPage/ui/MainPage";
import NotFound from "../../../pages/NotFoundPage/ui/NotFound";
import SearchAddressPage from "../../../pages/SearchAddressPage/ui/SearchAddressPage";

export enum AppRoutes {
    MAIN = '/',
    NOT_FOUND = 'notFound',
    ADDRESS = 'address'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ADDRESS]: '/address',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>,
    },
    [AppRoutes.ADDRESS]: {
        path: RoutePath[AppRoutes.ADDRESS],
        element: <SearchAddressPage/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFound/>,
    },

};

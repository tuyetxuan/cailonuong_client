import {createBrowserRouter, RouterProvider} from "react-router-dom";

import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";

const AppRouter = () => {
	
	const routes = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);
	
	return <RouterProvider router={routes}/>;
};

export default AppRouter;

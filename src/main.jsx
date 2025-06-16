import {store} from "@redux/store.js";
import "@styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";

import App from "./App";

const __root = ReactDOM.createRoot(document.getElementById("__root"));
__root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
);

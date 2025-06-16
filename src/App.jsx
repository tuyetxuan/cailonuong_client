import AntdConfig from "@configs/Antd/index.jsx";
import {App as AntdApp} from "antd";
import AppRouter from "./routes/index";

const AppStore = () => {
	return (
		<AntdConfig>
			<AntdApp>
				<AppRouter/>
			</AntdApp>
		</AntdConfig>
	);
};

export default AppStore;

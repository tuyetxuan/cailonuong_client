import {LogoutOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useState} from "react";
import ConfirmLogoutModal from './ConfirmLogoutModal';

const Logout = () => {
	const [visible, setVisible] = useState(false);
	
	const handleConfirm = () => {
		// Xử lý đăng xuất tại đây (ví dụ: xóa token, chuyển route...)
		console.log("Đã đăng xuất");
		setVisible(false);
	};
	
	return (
		<>
			<Button
				className="m-auto"
				danger
				icon={<LogoutOutlined/>}
				onClick={() => setVisible(true)}
			>
				Đăng xuất
			</Button>
			<ConfirmLogoutModal
				visible={visible}
				onConfirm={handleConfirm}
				onCancel={() => setVisible(false)}
			/>
		</>
	);
};

export default Logout;

import {ClockCircleOutlined, ShoppingOutlined} from "@ant-design/icons";
import {Button, Card, Col, Descriptions, Divider, Modal, Row, Steps, Tag, Typography,} from "antd";
import {useState} from "react";

const {Step} = Steps;

const orders = [
	{
		id: "ORDER12345",
		status: 2,
		createdAt: "2025-05-09 14:30",
		totalItems: 3,
		originalPrice: 450000,
		discount: 50000,
		finalPrice: 400000,
		note: "Giao hàng giờ hành chính",
		products: [
			{name: "Rau muống", quantity: 1, price: 20000, note: "Không có ớt"},
			{name: "Cà rốt", quantity: 2, price: 30000, note: "Không có ớt"},
			{name: "Thịt heo", quantity: 1, price: 80000, note: "Phải cắt nhỏ"},
		],
	},
	{
		id: "ORDER67890",
		status: 1,
		createdAt: "2025-05-10 09:15",
		totalItems: 2,
		originalPrice: 300000,
		discount: 30000,
		finalPrice: 270000,
		note: "Giao hàng vào buổi sáng",
		products: [
			{name: "Cá hồi", quantity: 1, price: 150000, note: "Tươi sống"},
			{name: "Gạo", quantity: 1, price: 150000, note: "Nên chọn loại thơm"},
		],
	},
];

const OrderHistory = () => {
	const [selectedOrder, setSelectedOrder] = useState(null);
	
	const showModal = (order) => {
		setSelectedOrder(order);
	};
	
	const handleCancel = () => {
		setSelectedOrder(null);
	};
	
	return (
		<div style={{padding: 20, maxWidth: 900, margin: "auto"}}>
			<Typography.Title level={4}>🧾 Lịch sử đơn hàng</Typography.Title>
			
			{orders.map((order, index) => (
				<div
					key={index}
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 16,
						justifyContent: "space-between",
						marginBottom: 20,
					}}
				>
					{orders.map((order, index) => (
						<Card
							key={index}
							style={{
								width: 300,
								borderRadius: 10,
								padding: 5,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
							bodyStyle={{padding: 10}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 16,
									justifyContent: "space-between",
								}}
							>
								<img
									src="https://cailonuong.com/wp-content/uploads/2025/04/comdua0293.jpg"
									alt="product"
									style={{
										width: 60,
										height: 60,
										borderRadius: 8,
										objectFit: "cover",
									}}
								/>
								<div>
									<div>
										<ShoppingOutlined/> <strong>#{order.id}</strong>
									</div>
									<div style={{fontSize: 13, color: "#666"}}>
										🕒 {order.createdAt} &nbsp;|&nbsp; {order.totalItems} sản
										phẩm
									</div>
									<div style={{fontSize: 13}}>
										💰 <strong>{order.finalPrice.toLocaleString()}₫</strong>
									</div>
								</div>
							</div>
							
							<div style={{marginTop: 12, textAlign: "right"}}>
								<Button type="link" onClick={() => showModal(order)}>
									Xem chi tiết
								</Button>
							</div>
						</Card>
					))}
				</div>
			))}
			
			<Modal
				centered
				title={`Chi tiết đơn hàng #${selectedOrder?.id}`}
				open={!!selectedOrder}
				onCancel={handleCancel}
				footer={null}
				width={800}
				bodyStyle={{padding: 16}}
			>
				<Steps
					size="small"
					current={selectedOrder?.status || 0}
					style={{marginBottom: 20}}
				>
					<Step title="Đặt hàng"/>
					<Step title="Xử lý"/>
					<Step title="Giao hàng"/>
					<Step title="Hoàn tất"/>
				</Steps>
				
				<div style={{display: "flex", flexDirection: "column", gap: 12}}>
					{selectedOrder?.products?.map((item, index) => (
						<div
							key={index}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 12,
								border: "1px solid #eee",
								borderRadius: 8,
								padding: 8,
							}}
						>
							<img
								src="https://cailonuong.com/wp-content/uploads/2025/04/comdua0293.jpg"
								alt={item.name}
								style={{width: 60, height: 60, borderRadius: 8}}
							/>
							<div style={{flex: 1}}>
								<Typography.Text strong>{item.name}</Typography.Text>
								<div style={{fontSize: 13}}>
									Số lượng: x{item.quantity} | Tổng:{" "}
									{(item.price * item.quantity).toLocaleString()}₫
								</div>
								{item.note && (
									<div
										style={{fontSize: 12, color: "#888", fontStyle: "italic"}}
									>
										📝 {item.note}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
				
				<Divider/>
				
				<Row gutter={16}>
					<Col xs={24} sm={12}>
						<Descriptions column={1} size="small" bordered>
							<Descriptions.Item label="Ngày đặt hàng">
								<ClockCircleOutlined/> {selectedOrder?.createdAt}
							</Descriptions.Item>
							<Descriptions.Item label="Ghi chú đơn hàng">
								{selectedOrder?.note}
							</Descriptions.Item>
							<Descriptions.Item label="Số sản phẩm">
								{selectedOrder?.totalItems} sản phẩm
							</Descriptions.Item>
						</Descriptions>
					</Col>
					<Col xs={24} sm={12}>
						<Descriptions column={1} size="small" bordered>
							<Descriptions.Item label="Tổng tiền gốc">
								{selectedOrder?.originalPrice.toLocaleString()}₫
							</Descriptions.Item>
							<Descriptions.Item label="Giảm giá">
								- {selectedOrder?.discount.toLocaleString()}₫
							</Descriptions.Item>
							<Descriptions.Item label="Thanh toán">
								<Tag color="green">
									{selectedOrder?.finalPrice.toLocaleString()}₫
								</Tag>
							</Descriptions.Item>
						</Descriptions>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default OrderHistory;

import {DeleteOutlined, EditOutlined, MinusOutlined, PlusOutlined,} from "@ant-design/icons";
import {useGetProvincesQuery} from "@slice/addressSlice.js";
import {Button, Card, Col, Divider, Input, Row, Select, Steps, theme,} from "antd";
import {useEffect, useState} from "react";

const Cart = () => {
	const {
		data: provinces,
		isLoading: provincesLoading,
		error: provincesError,
	} = useGetProvincesQuery();
	const [showAddressForm, setShowAddressForm] = useState(false);
	const cartItems = [
		{
			id: 1,
			name: "Summer Wine - Entremet Anh Đào",
			image: "https://cailonuong.com/wp-content/uploads/2025/04/comdua0293.jpg",
			price: 100000,
			quantity: 1,
		},
		{
			id: 2,
			name: "Sweetin – Matcha Goma (Mè đen)",
			image:
				"https://cailonuong.com/wp-content/uploads/2025/04/cherry0914-1.jpg",
			price: 200000,
			quantity: 1,
		},
		{
			id: 3,
			name: "Product 3",
			image:
				"https://cailonuong.com/wp-content/uploads/2025/04/banhbap0439-1.jpg",
			price: 300000,
			quantity: 1,
		},
	];
	useEffect(() => {
		if (provincesError) {
			console.error("Error fetching provinces:", provincesError);
		}
	}, [provincesError, provinces]);
	const steps = [
		{
			title: "Giỏ hàng",
			content: (
				<div className="mt-2 p-3">
					<Row gutter={24}>
						<p className="text-text-primary m-auto mb-4 text-2xl font-semibold">
							Thông tin giỏ hàng của bạn
						</p>
					</Row>
					<div className="mt-8 mb-5 flex flex-nowrap items-center justify-end gap-10">
						<Input placeholder="MÃ ƯU ĐÃI" size={"large"}/>
						<Button color="orange" size={"large"}>
							ÁP DỤNG MÃ
						</Button>
					</div>
					<Row gutter={24} style={{margin: 0, padding: 0}}>
						<Col xs={24} md={16}>
							<Row gutter={24} md={16}>
								<Card
									className="mb-4 w-full"
									bodyStyle={{padding: "10px"}}
									style={{marginBottom: "10px"}}
								>
									<div className="relative flex items-center justify-start">
										<div className="ml-4 flex flex-1 flex-nowrap items-center justify-between">
											<div className="text-text-orange max-w-[40px] text-[15px] font-bold">
												Ảnh
											</div>
											<div className="text-text-orange max-w-[265px] text-[15px] font-bold">
												Tên sản phẩm
											</div>
											<div className="text-text-orange ml-4 text-[15px] font-bold whitespace-nowrap">
												Giá
											</div>
											<div className="text-text-orange text-[15px] font-bold">
												Số lượng
											</div>
											<div className="text-text-orange text-[15px] font-bold">
												Tạm tính
											</div>
										</div>
									</div>
								</Card>
							</Row>
							<Row gutter={24} md={16}>
								{cartItems.map((item) => (
									<Card
										key={item.id}
										className="mb-4"
										bodyStyle={{padding: "10px"}}
										style={{marginBottom: "10px"}}
									>
										<div className="relative flex items-center justify-start">
											<img
												src={item.image}
												alt={item.name}
												className="m-auto w-20 rounded-sm object-cover shadow-xl"
											/>
											<div className="ml-4 flex flex-1 flex-nowrap items-center justify-start">
												<div className="max-w-[265px]">
													<p className="line-clamp-2 text-[18px] font-[600] break-words text-[#626262]">
														Sweetin – Matcha Goma (Mè đen)
													</p>
												</div>
												<p className="text-text-orange ml-4 text-[15px] font-bold whitespace-nowrap">
													250.000 đ
												</p>
												<div className="ml-4 flex items-center gap-2">
													<div
														className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
														onClick={() => {/* Hàm giảm số lượng */
														}}
													>
														<MinusOutlined/>
													</div>
													<Input
														min={1}
														value={item.quantity}
														className="text-center"
														style={{width: "50px", textAlign: "center"}}
													/>
													<div
														className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
														onClick={() => {/* Hàm tăng số lượng */
														}}
													>
														<PlusOutlined/>
													</div>
												</div>
												<p className="text-text-orange ml-4 text-[15px] font-bold whitespace-nowrap">
													250.000 đ
												</p>
											</div>
											<div className="absolute end-0 top-0 hover:cursor-pointer hover:text-[red]">
												<DeleteOutlined/>
											</div>
										</div>
									</Card>
								))}
								<Button
									block
									type="dashed"
									variant="dashed"
									danger
									onClick={() => console.log("Clear cart")}
									className="flex items-center justify-center gap-2 py-2"
								>
									<DeleteOutlined className="text-[18px]"/>
									<span>Xóa hết giỏ hàng</span>
								</Button>
							</Row>
						</Col>
						<Col xs={24} md={8} style={{paddingRight: "0"}}>
							<Card title="Cộng giỏ hàng" bordered={false}>
								<div className="mb-2 flex justify-between">
									<span>Tạm tính</span>
									<span className="font-bold">2.500.000 đ</span>
								</div>
								<Divider style={{borderColor: "#45612D"}}/>
								
								<div className="mb-2">
									<div className="flex justify-between">
										<span>Giao hàng</span>
										<span className="font-bold">30.000 đ</span>
									</div>
									<div className="mt-2">
										Vận chuyển đến{" "}
										<span className="font-bold text-black">
                      Tp. Hồ Chí Minh
                    </span>
									</div>
									{!showAddressForm && (
										<div className="mt-1 text-[13px] text-gray-700">
											<div>
												<Button
													type="link"
													size="small"
													className="p-0 text-yellow-600"
													icon={<EditOutlined/>}
													onClick={() => setShowAddressForm(true)}
												>
													Đổi địa chỉ
												</Button>
											</div>
										</div>
									)}
									
									{showAddressForm && (
										<div className="mt-2 flex flex-col items-end gap-2 space-y-2">
											<Select
												placeholder="Tỉnh /Thành phố"
												className="w-[80%]"
												size="middle"
												allowClear
												showSearch
												options={
													provincesLoading
														? []
														: provinces.map((province) => ({
															value: province.code,
															label: province.name,
														}))
												}
												loading={provincesLoading}
											/>
											<Select
												placeholder="Quận/Huyện"
												className="w-[80%]"
												size="middle"
											/>
											<Select
												placeholder="Xã/Thị Trấn"
												className="w-[80%]"
												size="middle"
											/>
											<Button
												type="primary"
												size="middle"
												className="bg-bg-orange mt-2 w-[60%] border-none"
											>
												Cập nhật
											</Button>
										</div>
									)}
								</div>
								
								<Divider style={{borderColor: "#45612D"}}/>
								<div className="mb-4 flex items-center justify-between font-bold">
									<span>Tổng</span>
									<span className="text-xl text-[red]">2.530.000 đ</span>
								</div>
								<Divider style={{borderColor: "#45612D"}}/>
								
								<Button type="primary" block icon={<EditOutlined/>}>
									Tiến hành thanh toán
								</Button>
							</Card>
						</Col>
					</Row>
				</div>
			),
		},
		{
			title: "Thanh toán đơn hàng",
			content: "Second-content",
		},
		{
			title: "Đơn hàng",
			content: "Last-content",
		},
	];
	const {token} = theme.useToken();
	const [current, setCurrent] = useState(0);
	const next = () => {
		setCurrent(current + 1);
	};
	const prev = () => {
		setCurrent(current - 1);
	};
	const items = steps.map((item) => ({key: item.title, title: item.title}));
	const contentStyle = {
		lineHeight: "260px",
		textAlign: "center",
		color: token.colorTextTertiary,
		backgroundColor: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: `1px dashed ${token.colorBorder}`,
		marginTop: 24,
	};
	
	return (
		<div className="mx-auto max-w-5xl space-y-12 p-6 pt-10">
			<Steps current={current} items={items} size={"default"}/>
			
			<div style={contentStyle}>{steps[current].content}</div>
			
			{/*<div style={{marginTop: 24}}>*/}
			{/*    {current < steps.length - 1 && (*/}
			{/*        <Button type="primary" onClick={() => next()}>*/}
			{/*            Next*/}
			{/*        </Button>*/}
			{/*    )}*/}
			{/*    {current === steps.length - 1 && (*/}
			{/*        <Button type="primary" onClick={() => message.success('Processing complete!')}>*/}
			{/*            Done*/}
			{/*        </Button>*/}
			{/*    )}*/}
			{/*    {current > 0 && (*/}
			{/*        <Button style={{margin: '0 8px'}} onClick={() => prev()}>*/}
			{/*            Previous*/}
			{/*        </Button>*/}
			{/*    )}*/}
			{/*</div>*/}
		</div>
	);
};

export default Cart;

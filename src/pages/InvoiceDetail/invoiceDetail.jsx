import React, {useState} from "react";

const mockInvoice = {
	id: "INV-20240510-001",
	customer: {
		name: "Nguyễn Văn A",
		phone: "0123 456 789",
		email: "a.nguyen@example.com",
	},
	items: [
		{name: "Rau cải xanh", quantity: 2, price: 15000},
		{name: "Cà chua Đà Lạt", quantity: 1, price: 12000},
		{name: "Thịt bò tươi", quantity: 0.5, price: 180000},
	],
	createdAt: "2025-05-10",
	paymentMethod: "Chuyển khoản ngân hàng",
	total: 0,
};

mockInvoice.total = mockInvoice.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default function InvoicePage() {
	const [inputId, setInputId] = useState("");
	const [invoice, setInvoice] = useState(null);
	
	const handleSearch = (e) => {
		e.preventDefault();
		// Giả lập load hóa đơn (bạn có thể thay bằng gọi API thật)
		if (inputId.trim() === mockInvoice.id) {
			setInvoice(mockInvoice);
		} else {
			setInvoice(null);
			alert("Không tìm thấy hóa đơn!");
		}
	};
	
	return (
		<div className="min-h-screen bg-gray-50 py-10 px-4">
			{/* Header */}
			<header className="max-w-4xl mx-auto flex items-center justify-between mb-8 border-b pb-4">
				<div className="flex items-center gap-4">
					<img src="https://via.placeholder.com/60x60?text=LOGO" alt="Logo" className="w-14 h-14 rounded-full"/>
					<div>
						<h1 className="text-2xl font-bold text-green-700">Green Grocery</h1>
						<p className="text-sm text-gray-600">Hóa đơn bán hàng trực tuyến</p>
					</div>
				</div>
				<div className="text-right text-sm text-gray-500 hidden sm:block">
					<p>📞 0123 456 789</p>
					<p>✉️ support@greengrocery.vn</p>
				</div>
			</header>
			
			{/* Tìm kiếm hóa đơn */}
			<form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
				<div className="flex flex-col sm:flex-row items-center gap-3">
					<input
						type="text"
						placeholder="Nhập mã hóa đơn (VD: INV-20240510-001)"
						value={inputId}
						onChange={(e) => setInputId(e.target.value)}
						className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
					/>
					<button
						type="submit"
						className="bg-green-600 text-white px-5 py-3 rounded-lg shadow hover:bg-green-700 transition"
					>
						Tìm kiếm
					</button>
				</div>
			</form>
			
			{/* Hóa đơn */}
			{invoice && (
				<div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
					<div className="mb-6 border-b pb-4">
						<h2 className="text-xl font-semibold text-gray-700">HÓA ĐƠN BÁN HÀNG</h2>
						<p className="text-sm text-gray-500">Mã hóa đơn: {invoice.id}</p>
						<p className="text-sm text-gray-500">Ngày tạo: {invoice.createdAt}</p>
					</div>
					
					<div className="mb-4">
						<h3 className="font-semibold text-gray-600 mb-1">Thông tin khách hàng</h3>
						<p>👤 {invoice.customer.name}</p>
						<p>📞 {invoice.customer.phone}</p>
						<p>✉️ {invoice.customer.email}</p>
					</div>
					
					<div className="mb-4">
						<h3 className="font-semibold text-gray-600 mb-2">Danh sách sản phẩm</h3>
						<table className="w-full text-sm border rounded overflow-hidden">
							<thead className="bg-green-100 text-left">
							<tr>
								<th className="py-2 px-3">Tên sản phẩm</th>
								<th className="py-2 px-3">Số lượng</th>
								<th className="py-2 px-3">Đơn giá (đ)</th>
								<th className="py-2 px-3">Thành tiền (đ)</th>
							</tr>
							</thead>
							<tbody>
							{invoice.items.map((item, i) => (
								<tr key={i} className="border-t hover:bg-green-50">
									<td className="py-2 px-3">{item.name}</td>
									<td className="py-2 px-3">{item.quantity}</td>
									<td className="py-2 px-3">{item.price.toLocaleString()}</td>
									<td className="py-2 px-3">{(item.quantity * item.price).toLocaleString()}</td>
								</tr>
							))}
							</tbody>
						</table>
					</div>
					
					<div className="flex justify-between mt-6">
						<div>
							<p>Hình thức thanh toán: <span className="font-medium">{invoice.paymentMethod}</span></p>
						</div>
						<div className="text-right">
							<p className="text-lg font-bold text-green-700">
								Tổng cộng: {invoice.total.toLocaleString()} đ
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

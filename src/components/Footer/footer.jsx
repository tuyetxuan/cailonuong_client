import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import Logo from "../../images/icons/logoSaleNoti.png";

const Footer = () => {
	return (
		<footer className="text-bg-white bg-bg-secondary max-w-full p-6 text-center text-sm">
			<div className="max-w-container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
				<div className="max-w-xl text-left">
					<p className="mb-3 text-[20px] font-semibold">
						Công ty TNHH Cái Lò Nướng
					</p>
					<p>2A Ba Gia, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh</p>
					<p>
						SĐT: 028.8888.3388 | Email:{" "}
						<a
							href="mailto:sale@cailonuong.vn"
							className="text-blue-500 hover:underline"
						>
							sale@cailonuong.vn
						</a>
					</p>
					<p>Giấy CNĐKDN: 0315630862 - Cấp ngày 16/04/2019</p>
					<p>Cơ quan cấp: Sở KH&ĐT TP. Hồ Chí Minh</p>
				</div>
				<div className="shrink-0">
					<form className="flex w-full flex-col items-start">
						<label
							htmlFor="email"
							className="mb-2 block text-sm font-medium text-gray-700"
						>
							Liên hệ với chúng tôi
						</label>
						<div className="mx-auto mb-3 flex w-full max-w-sm items-center gap-2">
							<input
								type="email"
								id="email"
								name="email"
								className="focus:ring-primary focus:border-primary block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
								placeholder="Nhập email của bạn"
							/>
							<button
								type="submit"
								className="bg-bg-primary hover:bg-bg-orange cursor-pointer rounded-md px-4 py-2 text-white transition duration-300"
							>
								Gửi
							</button>
						</div>
					</form>
					<div className="flex gap-4">
						<a
							href="javascript:void(0)"
							className="flex items-center gap-1 text-blue-500 hover:underline"
						>
							<FaFacebook/> Facebook
						</a>
						<a
							href="javascript:void(0)"
							className="flex items-center gap-1 text-blue-500 hover:underline"
						>
							<FaInstagram/> Instagram
						</a>
						<a
							href="javascript:void(0)"
							className="flex items-center gap-1 text-blue-500 hover:underline"
						>
							<FaTwitter/> Twitter
						</a>
					</div>
				</div>
				<div className="shrink-0">
					<img
						src={Logo}
						alt="logoSaleNoti"
						className="mx-auto h-20 object-contain"
					/>
				</div>
			</div>
			<div className="max-w-full py-4 text-sm">
				<div className="max-w-container mx-auto mb-2 text-center">
					© {new Date().getFullYear()} Cái Lò Nướng
				</div>
				<div
					className="max-w-container mx-auto flex flex-wrap justify-center gap-4 text-center"
					style={{color: "#A3A3A3"}}
				>
					<a href="javascript:void(0)" className="hover:underline">
						Chính sách giao hàng
					</a>
					<a href="javascript:void(0)" className="hover:underline">
						Chính sách trả hàng – hoàn tiền
					</a>
					<a href="javascript:void(0)" className="hover:underline">
						Phương thức thanh toán
					</a>
					<a href="javascript:void(0)" className="hover:underline">
						Điều khoản & điều kiện thanh toán
					</a>
					<a href="javascript:void(0)" className="hover:underline">
						Bảo vệ thông tin cá nhân người tiêu dùng
					</a>
					<a href="javascript:void(0)" className="hover:underline">
						Thông tin liên hệ
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

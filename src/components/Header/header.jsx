import {Icon} from "@iconify/react";
import Logo from "@images/logo/logo.png";
import {Button, Divider, Menu} from "antd";
import {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import "./header.scss";

const userMenu = (
	<Menu
		style={{
			width: 200,
			padding: 4,
			borderRadius: 6,
			fontSize: 15,
			boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
			color: "#45612D",
			backgroundColor: "#ffffff",
		}}
	>
		<Menu.Item key="profile" style={{padding: "10px 16px"}}>
			<div className="flex items-center gap-2">
				<Icon icon="fa:user" style={{color: "#45612D", fontSize: 20}}/>
				<span className="font-semibold text-[#45612D]">Thông tin cá nhân</span>
			</div>
		</Menu.Item>
		<Divider style={{padding: "0px", margin: "0px"}}/>
		<Menu.Item key="orders" style={{padding: "10px 16px"}}>
			<div className="flex items-center gap-2">
				<Icon
					icon="icon-park-solid:transaction-order"
					style={{color: "#45612D", fontSize: 20}}
				/>
				<span className="font-semibold text-[#45612D]">Đơn hàng của bạn</span>
			</div>
		</Menu.Item>
		<Divider style={{padding: "0px", margin: "0px"}}/>
		<Menu.Item key="orders" style={{padding: "10px 16px"}}>
			<div className="flex items-center gap-2">
				<Icon
					icon="material-symbols:deployed-code-history-sharp"
					style={{color: "#45612D", fontSize: 20}}
				/>
				<span className="font-semibold text-[#45612D]">Lịch sử đơn hàng</span>
			</div>
		</Menu.Item>
		<Divider style={{padding: "0px", margin: "0px"}}/>
		<Menu.Item key="orders" style={{padding: "10px 16px"}}>
			<div className="flex items-center gap-2">
				<Icon
					icon="el:address-book-alt"
					style={{color: "#45612D", fontSize: 20}}
				/>
				<span className="font-semibold text-[#45612D]">Địa chỉ giao hàng</span>
			</div>
		</Menu.Item>
		<Divider style={{padding: "0px", margin: "0px"}}/>
		<Menu.Item key="orders" style={{padding: "10px 16px"}}>
			<div className="flex items-center gap-2">
				<Icon
					icon="mynaui:cart-solid"
					style={{color: "#45612D", fontSize: 20}}
				/>
				<span className="font-semibold text-[#45612D]">Giỏ hàng của bạn</span>
			</div>
		</Menu.Item>
		<Divider style={{padding: "0px", margin: "0px"}}/>
		<Menu.Item key="logout" style={{padding: "10px 16px"}}>
			<div className="flex items-center gap-2">
				<Icon icon="mdi:logout" style={{color: "red", fontSize: 20}}/>
				<span className="font-semibold text-[red]">Đăng xuất</span>
			</div>
		</Menu.Item>
	</Menu>
);

const Header = () => {
	const [isFocused, setIsFocused] = useState(false);
	const historySearch = ["Bánh mì", "Pizza", "Cái lò nướng", "Bánh kem"];
	const location = useLocation();
	const isActiveDetails = location.pathname.startsWith("/menu-banh");
	console.log("isActiveDetails", isActiveDetails);
	return (
		<header className="bg-bg-primary sticky top-0 z-50 w-full shadow-xl">
			<div className="header max-w-header m-auto">
				<div className="header__logo">
					<a href="/">
						<img src={Logo} alt="Logo" className="w-[100%] cursor-pointer"/>
					</a>
				</div>
				<nav className="nav">
					<ul className="nav__list">
						<li className="nav__item">
							<NavLink to="/">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>TRANG CHỦ</span>
								)}
							</NavLink>
						</li>
						
						<li className="nav__item has-submenu">
							<NavLink to="/menu" className={isActiveDetails ? "active" : ""}>
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>MENU BÁNH</span>
								)}
							</NavLink>
							<ul className="submenu">
								<li>
									<NavLink to="/menu/sweetbox">Sweetbox</NavLink>
								</li>
								<li>
									<NavLink to="/menu/sweetin">
										Sweetin – Bánh hộp thiếc cao cấp
									</NavLink>
								</li>
								<li>
									<NavLink to="/menu/mousse">Bánh Mousse</NavLink>
								</li>
								<li>
									<NavLink to="/menu/entremet">Bánh Entremet</NavLink>
								</li>
								<li>
									<NavLink to="/menu/kem-bap">Bánh Kem Bắp</NavLink>
								</li>
								<li>
									<NavLink to="/menu/flan">Bánh Flan Gato</NavLink>
								</li>
								<li>
									<NavLink to="/menu/healthy">Bánh Healthy</NavLink>
								</li>
								<li>
									<NavLink to="/menu/banh-nuong">Bánh nướng – Bánh mì</NavLink>
								</li>
							</ul>
						</li>
						
						<li className="nav__item">
							<NavLink to="/khach-hang-than-thiet">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>
                    KHÁCH HÀNG THÂN THIẾT
                  </span>
								)}
							</NavLink>
						</li>
						
						<li className="nav__item">
							<NavLink to="/giao-hang">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>GIAO HÀNG</span>
								)}
							</NavLink>
						</li>
						
						<li className="nav__item">
							<NavLink to="/lien-he">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>LIÊN HỆ</span>
								)}
							</NavLink>
						</li>
						
						<li className="nav__item">
							<NavLink to="/gio-hang">
								{({isActive}) => (
									<span className={isActive ? "active" : ""}>GIỎ HÀNG</span>
								)}
							</NavLink>
						</li>
						
						{/*<li className="nav__item has-submenu">*/}
						{/*    <NavLink to="/tin-tuc">*/}
						{/*        {({ isActive }) => <span className={isActive ? "active" : ""}>TIN TỨC</span>}*/}
						{/*    </NavLink>*/}
						{/*    <ul className="submenu">*/}
						{/*        <li><NavLink to="/tin-tuc/blog">Blog</NavLink></li>*/}
						{/*        <li><NavLink to="/tin-tuc/tin-tuc">Tin tức</NavLink></li>*/}
						{/*    </ul>*/}
						{/*</li>*/}
					</ul>
				</nav>
				<div className="relative">
					<div className="header__search">
						<input
							type="text"
							placeholder="Nhập tên sản phẩm..."
							onFocus={() => setIsFocused(true)}
							onBlur={() => setTimeout(() => setIsFocused(false), 200)}
						/>
						<button type="submit">
							<Icon
								icon="material-symbols:search-rounded"
								width="20"
								height="20"
								className="text-[#cccccc]"
							/>
							Tìm kiếm
						</button>
					</div>
					{isFocused && (
						<div className="bg-bg-white absolute top-full left-0 z-20 mt-2 w-[280px] rounded-lg border-gray-200 shadow-lg shadow-xl">
							<ul className="divide-y divide-gray-100">
								<li className="text-text-primary flex items-center justify-between px-4 py-2 text-sm">
									Lịch sử tìm kiếm
									<Icon
										icon="mdi:clock-arrow"
										width="18"
										height="18"
										className="text-text-primary"
									/>
								</li>
								{historySearch.map((item, index) => (
									<li
										key={index}
										className="text-bg-primary hover:text-text-orange flex cursor-pointer items-center justify-between px-4 py-2 text-sm transition-all"
									>
										<span>{item}</span>
										<Icon
											icon="fluent:arrow-reset-20-filled"
											width="18"
											height="18"
											className="text-bg-primary"
										/>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<div className="ml-5 flex items-center gap-2 text-[#A3A3A3]">
					<div className="flex flex-col leading-tight">
						<Button
							variant="solid"
							href="/dang-nhap#tab01"
							size="large"
							shape="round"
							style={{gap: 0}}
							icon={
								<Icon
									icon="qlementine-icons:user-16"
									width={25}
									className="pr-1"
								/>
							}
							color="orange"
							className="hover:bg-bg-orange bg-[transparent] transition-all"
						>
							<a href="/dang-nhap#tab01">
								<span className="text-bg-white">Đăng nhập/</span>
							</a>
							<a href="/dang-nhap#tab02">
								<span className="text-bg-white">Đăng ký</span>
							</a>
						</Button>
					</div>
				</div>
				{/*<div className="flex items-center gap-6 ml-6">*/}
				{/*	/!* Cart *!/*/}
				{/*	<div className="flex items-center gap-2 cursor-pointer">*/}
				{/*		<Icon icon="mdi:cart-outline" width="30" height="30" style={{color: "#A3A3A3"}}/>*/}
				{/*		<div className="flex flex-col leading-tight text-[14px] text-bg-gray">*/}
				{/*			<span className="font-medium text-bg-orange">Giỏ hàng</span>*/}
				{/*			<span className='text-bg-orange'>0 sản phẩm</span>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*	*/}
				{/*	/!* User *!/*/}
				{/*	<Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight" arrow>*/}
				{/*		<div className="flex items-center gap-2 cursor-pointer">*/}
				{/*			<Icon icon="mdi:account-circle-outline" width="32" height="32" style={{color: "#A3A3A3"}}/>*/}
				{/*			*/}
				{/*			<div className="flex flex-col leading-tight text-[14px] text-bg-gray">*/}
				{/*				<span className="font-medium text-bg-orange">Chào bạn,</span>*/}
				{/*				<span className="font-semibold text-bg-orange">Phương Tuyết Xuân</span>*/}
				{/*			</div>*/}
				{/*			*/}
				{/*			<Icon icon="mdi:chevron-down" width="20" height="20" style={{color: "#A3A3A3"}}/>*/}
				{/*		</div>*/}
				{/*	</Dropdown>*/}
				
				{/*</div>*/}
			</div>
		</header>
	);
};

export default Header;

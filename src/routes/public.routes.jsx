import Spinner from "@components/Spinner/spinner.jsx";
import SpinnerSmall from "@components/Spinner/spinnerSmall.jsx";
import Page404 from "@pages/Page404";
import PageError from "@pages/PageError";
import React, {Suspense} from "react";

const Layout = React.lazy(() => import("@layouts/layout_home"));
const Home = React.lazy(() => import("@pages/HomePage/home.jsx"));
const Member = React.lazy(() => import("@pages/MembersPage/member.jsx"));
const GiaoHang = React.lazy(() => import("@pages/DeliveryPage/delivery.jsx"));
const BranchInfo = React.lazy(
	() => import("@pages/BranchInfoPage/branchInfo.jsx"),
);
const Cart = React.lazy(() => import("@pages/CartPage/cart.jsx"));
const Login = React.lazy(() => import("@pages/LoginPage/loginRegister.jsx"));
const MenuProduct = React.lazy(
	() => import("@pages/MenuProductPage/menuProduct.jsx"),
);
const DetailsProduct = React.lazy(
	() => import("@pages/DetailsProductPage/detailsProduct.jsx"),
);
const Menu = React.lazy(() => import("@pages/Menu/menu.jsx"));
const Profile = React.lazy(() => import("@pages/ProfilePage/profile.jsx"));
const InvoiceDetail = React.lazy(() => import("@pages/InvoiceDetail/invoiceDetail.jsx"));

const ROUTER_PATH = {
	HOME_FIRST: "/",
	HOME_INDEX: "/index",
	MEMBER: "/khach-hang-than-thiet",
	GIAO_HANG: "/giao-hang",
	BRANCH_INFO: "/lien-he",
	CART: "/gio-hang",
	LOGIN: "/dang-nhap",
	MENU: "/menu",
	MENU_PRODUCT: "/menu/:slug",
	DETAILS_PRODUCT: "/menu-banh/:slug",
	PROFILE: "/thong-tin-ca-nhan",
	ORDER: "/thong-tin-don-hang",
};

const PublicRoutes = [
	{
		path: ROUTER_PATH.HOME_FIRST,
		element: (
			<Suspense fallback={<Spinner/>}>
				<Layout/>
			</Suspense>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Home/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.MEMBER,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Member/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.GIAO_HANG,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<GiaoHang/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.BRANCH_INFO,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<BranchInfo/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.CART,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Cart/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.LOGIN,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Login/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.MENU,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Menu/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.MENU_PRODUCT,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<MenuProduct/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.DETAILS_PRODUCT,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<DetailsProduct/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.PROFILE,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<Profile/>
					</Suspense>
				),
			},
			{
				path: ROUTER_PATH.ORDER,
				element: (
					<Suspense
						fallback={
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "100vh",
								}}
							>
								<SpinnerSmall/>
							</div>
						}
					>
						<InvoiceDetail/>
					</Suspense>
				),
			},
			{
				path: "*",
				element: <PageError/>,
			},
			{
				path: "*",
				element: <Page404/>,
			},
		],
	},
];

export default PublicRoutes;

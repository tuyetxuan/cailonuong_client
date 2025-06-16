import SpinnerSmall from "@components/Spinner/spinnerSmall.jsx";
import { Segmented } from "antd";
import React, { Suspense, useState } from "react";

const Info = React.lazy(() => import("@components/Segmented/info.jsx"));
const Address = React.lazy(() => import("@components/Segmented/address.jsx"));
const OrderHistory = React.lazy(
  () => import("@components/Segmented/historyOrder.jsx"),
);
const ChangePasswordForm = React.lazy(
  () => import("@components/Segmented/changePassword.jsx"),
);
const Logout = React.lazy(() => import("@components/Segmented/logout.jsx"));
const Order = React.lazy(() => import("@components/Segmented/order.jsx"));

const Profile = () => {
  const [selectedSegment, setSelectedSegment] = useState("info");

  const handleSegmentChange = (value) => {
    setSelectedSegment(value);
  };

  const renderComponent = () => {
    switch (selectedSegment) {
      case "info":
        return <Info />;
      case "address":
        return <Address />;
      case "order":
        return <Order />;
      case "history":
        return <OrderHistory />;
      case "changePassword":
        return <ChangePasswordForm />;
      case "logout":
        return <Logout />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-container mx-auto">
      <div className="mt-5 mb-[5px] text-center text-2xl font-medium">
        THÔNG TIN CÁ NHÂN
      </div>
      <div className="mx-auto flex w-full items-center justify-center pt-5">
        <Segmented
          size="large"
          defaultValue="info"
          options={[
            {
              label: "Thông tin người dùng",
              value: "info",
              icon: <i className="fas fa-user" />,
            },
            {
              label: "Địa chỉ",
              value: "address",
              icon: <i className="fas fa-map-marker-alt" />,
            },
            {
              label: "Đơn hàng",
              value: "order",
              icon: <i className="fas fa-shopping-cart" />,
            },
            {
              label: "Lịch sử đơn hàng",
              value: "history",
              icon: <i className="fas fa-history" />,
            },
            {
              label: "Đổi mật khẩu",
              value: "changePassword",
              icon: <i className="fas fa-key" />,
            },
            {
              label: "Đăng xuất",
              value: "logout",
              icon: <i className="fas fa-sign-out-alt" />,
            },
          ]}
          value={selectedSegment}
          onChange={handleSegmentChange}
          className="m-auto mb-4 border"
        />
      </div>
      <div className="mx-auto mt-5 mb-5 min-h-[500px] max-w-[705px]">
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "500px",
              }}
            >
              <SpinnerSmall />
            </div>
          }
        >
          {renderComponent()}
        </Suspense>
      </div>
    </div>
  );
};

export default Profile;

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import LogoLogin from "@images/logo/logoLogin.png";
import { Button, Divider, Form, Input, Tabs } from "antd";
import React from "react";

const LoginRegisterPage = () => {
  const [textTab, setTextTab] = React.useState("Đăng nhập hệ thống");
  const [activeKey, setActiveKey] = React.useState("1");
  const hash = window.location.hash;
  React.useEffect(() => {
    if (hash === "#tab02") {
      setActiveKey("2");
      setTextTab("Tạo tài khoản");
    }
  }, [hash]);

  return (
    <div className="relative">
      <div
        className="absolute top-[270px] left-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-xl bg-white shadow-2xl"
        style={{
          border: "2px solid rgba(69, 97, 45, 0.6)",
          background: "rgba(255, 255, 255, 0.6)",
          outline: "6px solid rgba(243, 246, 241, 0.5)",
        }}
      >
        <div className="flex">
          <div className="flex w-1/2 items-center justify-center bg-[#ffffff] p-8">
            <img
              src={LogoLogin}
              alt="Logo"
              className="animate-spin-slow h-90 w-90 object-contain"
            />
          </div>
          <div className="min-h-[470px] w-1/2 bg-[#ffffff] p-5 transition-all duration-100">
            <span className="text-bg-primary mb-2 block text-center text-2xl font-extrabold">
              {textTab}
            </span>
            <Tabs
              defaultActiveKey={hash === "#tab02" ? "2" : "1"}
              centered
              className="w-full"
              onTabClick={(key) =>
                setTextTab(
                  key === "1" ? "Đăng nhập tài khoản" : "Tạo tài khoản",
                )
              }
            >
              <Tabs.TabPane tab="Đăng nhập" key="1">
                <Form layout="vertical">
                  <Form.Item label="Email" style={{ marginBottom: "10px" }}>
                    <Input
                      size="large"
                      prefix={<UserOutlined />}
                      placeholder="Nhập email"
                    />
                  </Form.Item>
                  <Form.Item label="Mật khẩu" style={{ marginBottom: "10px" }}>
                    <Input.Password
                      size="large"
                      prefix={<LockOutlined />}
                      placeholder="Nhập mật khẩu"
                    />
                  </Form.Item>
                  <Button type="primary" block size="large" className="mt-2">
                    Đăng nhập
                  </Button>
                  <Button
                    color="primary"
                    variant="link"
                    style={{ padding: 0, marginTop: 5 }}
                  >
                    Quên mật khẩu ?
                  </Button>
                  <Divider style={{ margin: "5px 0px" }}>Other</Divider>
                  <div className="mb-2 flex w-full items-center justify-center">
                    <Button
                      block
                      icon={<Icon icon="flat-color-icons:google" />}
                      target="_blank"
                      size="large"
                      className="text-center"
                    >
                      {" "}
                      Login with Google
                    </Button>
                  </div>
                </Form>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đăng ký" key="2">
                <Form layout="vertical">
                  <Form.Item label="Email" style={{ marginBottom: "10px" }}>
                    <Input
                      size="large"
                      prefix={<UserOutlined />}
                      placeholder="Nhập email"
                    />
                  </Form.Item>
                  <Form.Item label="Mật khẩu" style={{ marginBottom: "10px" }}>
                    <Input.Password
                      size="large"
                      prefix={<LockOutlined />}
                      placeholder="Nhập mật khẩu"
                    />
                  </Form.Item>
                  <Form.Item label="Xác nhận mật khẩu">
                    <Input.Password
                      size="large"
                      prefix={<LockOutlined />}
                      placeholder="Nhập lại mật khẩu"
                    />
                  </Form.Item>
                  <Button type="primary" block size="large" className="mt-4">
                    Đăng ký
                  </Button>
                </Form>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="bg-bg-primary h-[180px] w-full"></div>
      <div
        className="flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${LogoLogin})`,
          backgroundColor: "rgba(255,255,255,0.92)",
          backgroundBlendMode: "lighten",
          minHeight: "calc(100vh - 110px - 248.4px)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "8=90%",
          margin: "auto",
        }}
      >
        <div className="pt-5 pt-[350px] pb-5">
          <div className="flex flex-nowrap items-center gap-18 pb-5">
            <div>
              <img
                src="https://cailonuong.com/wp-content/uploads/2023/08/membership.jpg"
                alt="Ưu đãi khách hàng"
                className="w-[300px] rounded-xl object-cover shadow-md"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-primary text-2xl font-bold">
                Ưu đãi dành riêng cho khách hàng thân thiết
              </h2>{" "}
              <p>
                Tri ân quý khách đã luôn tin tưởng lựa chọn Cái Lò Nướng, chúng
                tôi xin gửi tới các ưu đãi hấp dẫn:
              </p>
              <div>
                <h3 className="mt-4 text-xl font-semibold">
                  A. Đăng ký thành viên
                </h3>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  <li>
                    🏬 Mua tại cửa hàng: nhân viên hỗ trợ đăng ký thành viên
                    ngay hóa đơn đầu tiên.
                  </li>
                  <li>
                    🌐 Mua online: hệ thống tự động tạo tài khoản qua số điện
                    thoại đơn hàng.
                  </li>
                </ul>
                <h3 className="mt-4 text-xl font-semibold">
                  B. Chính sách ưu đãi
                </h3>
                <ul className="list-inside list-disc space-y-1 text-gray-700">
                  <li>
                    <strong>Member</strong> (từ 800K): Freeship 30K, sinh nhật
                    tặng voucher -15%.
                  </li>
                  <li>
                    <strong>VIP Silver</strong> (1.5M - 2.5M): Giảm 10%,
                    freeship 30K, voucher sinh nhật -15%.
                  </li>
                  <li>
                    <strong>VIP Gold</strong> (2.5M - 5M): Giảm 10%, freeship
                    40K, voucher sinh nhật -20%.
                  </li>
                  <li>
                    <strong>VIP Diamond</strong> (5M+): Giảm 15%, freeship toàn
                    nội thành, voucher sinh nhật -20%.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginRegisterPage;

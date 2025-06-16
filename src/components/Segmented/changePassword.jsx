import { LockOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message, Typography } from "antd";

const { Title, Text } = Typography;

const ChangePasswordForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { currentPassword, newPassword, confirmPassword } = values;

    if (newPassword !== confirmPassword) {
      message.error("Mật khẩu mới không khớp!");
      return;
    }

    // Gửi API ở đây
    console.log("Change password:", { currentPassword, newPassword });

    message.success("Đổi mật khẩu thành công!");
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 705, margin: "10px auto", padding: "0 5px" }}>
      <Card
        style={{
          borderRadius: 16,
          padding: "10px 10px",
        }}
        bodyStyle={{ padding: "10px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <LockOutlined style={{ fontSize: 32, color: "#1890ff" }} />
          <Title level={3} style={{ marginTop: 12 }}>
            Đổi mật khẩu
          </Title>
          <Text type="secondary">Vui lòng nhập thông tin để đổi mật khẩu</Text>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="🔐 Mật khẩu hiện tại"
            name="currentPassword"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu hiện tại!" },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu hiện tại" />
          </Form.Item>

          <Form.Item
            label="🆕 Mật khẩu mới"
            name="newPassword"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu mới!" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu mới" />
          </Form.Item>

          <Form.Item
            label="✅ Xác nhận mật khẩu mới"
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Vui lòng xác nhận mật khẩu mới!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Mật khẩu xác nhận không khớp!");
                },
              }),
            ]}
          >
            <Input.Password placeholder="Nhập lại mật khẩu mới" />
          </Form.Item>

          <Form.Item style={{ textAlign: "right", marginTop: 24 }}>
            <Button type="primary" htmlType="submit" size="large">
              🔄 Cập nhật mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ChangePasswordForm;

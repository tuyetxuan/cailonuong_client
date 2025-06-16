import {
  ClockCircleOutlined,
  DollarCircleOutlined,
  InfoCircleOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Modal,
  Row,
  Steps,
  Tag,
  Typography,
} from "antd";
import { useState } from "react";

const { Step } = Steps;

const mockOrder = {
  id: "ORDER12345",
  status: 2,
  createdAt: "2025-05-09 14:30",
  totalItems: 3,
  originalPrice: 450000,
  discount: 50000,
  finalPrice: 400000,
  note: "Giao hàng giờ hành chính",
  products: [
    { name: "Rau muống", quantity: 1, price: 20000, note: "Không có ớt" },
    { name: "Cà rốt", quantity: 2, price: 30000, note: "Không có ớt" },
    { name: "Thịt heo", quantity: 1, price: 80000, note: "rphải cắt nhỏ" },
  ],
};

const Order = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <Card
        title={
          <>
            <ShoppingOutlined /> Đơn hàng #{mockOrder.id}
          </>
        }
        extra={
          <Button type="primary" shape="round" onClick={showModal}>
            Xem chi tiết
          </Button>
        }
        style={{ maxWidth: 700, margin: "auto", borderRadius: 12 }}
        bodyStyle={{ padding: 20 }}
      >
        <Steps
          size="small"
          current={mockOrder.status}
          style={{ marginBottom: 20 }}
        >
          <Step title="Đặt hàng" />
          <Step title="Xử lý" />
          <Step title="Giao hàng" />
          <Step title="Hoàn tất" />
        </Steps>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Divider orientation="left">Thông tin đơn hàng</Divider>
            <Descriptions column={1} size="small" bordered>
              <Descriptions.Item label="Mã đơn hàng">
                <Tag color="blue">{mockOrder.id}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Ngày đặt hàng">
                <ClockCircleOutlined /> {mockOrder.createdAt}
              </Descriptions.Item>
              <Descriptions.Item label="Sản phẩm">
                {mockOrder.totalItems} mặt hàng
              </Descriptions.Item>
            </Descriptions>
          </Col>

          <Col xs={24} sm={12}>
            <Divider orientation="left">Tổng thanh toán</Divider>
            <Descriptions column={1} size="small" bordered>
              <Descriptions.Item label="Tổng tiền gốc">
                <DollarCircleOutlined />{" "}
                {mockOrder.originalPrice.toLocaleString()}₫
              </Descriptions.Item>
              <Descriptions.Item label="Giảm giá">
                - {mockOrder.discount.toLocaleString()}₫
              </Descriptions.Item>
              <Descriptions.Item label="Thanh toán">
                <strong style={{ color: "#1890ff" }}>
                  {mockOrder.finalPrice.toLocaleString()}₫
                </strong>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>
      <Modal
        centered={true}
        title="Chi tiết đơn hàng"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{ padding: 16 }}
      >
        <Typography.Title level={5}>🛒 Danh sách sản phẩm</Typography.Title>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 12,
          }}
        >
          {mockOrder.products.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 8,
                border: "1px solid #f0f0f0",
                borderRadius: 8,
              }}
            >
              <img
                src={`https://cailonuong.com/wp-content/uploads/2025/04/comdua0293.jpg`}
                alt={item.name}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
              <div style={{ flex: 1 }}>
                <Typography.Text strong>{item.name}</Typography.Text>
                <div style={{ fontSize: 13 }}>
                  Số lượng: x{item.quantity} &nbsp;|&nbsp; Tổng:{" "}
                  {(item.price * item.quantity).toLocaleString()}₫
                </div>
                {item.note && (
                  <div
                    style={{ fontSize: 12, fontStyle: "italic", color: "#888" }}
                  >
                    📝 {item.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Divider />

        <p style={{ marginTop: 8 }}>
          <InfoCircleOutlined /> <strong>Ghi chú đơn hàng:</strong>{" "}
          {mockOrder.note}
        </p>
      </Modal>
    </>
  );
};

export default Order;

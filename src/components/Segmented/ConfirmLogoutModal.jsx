import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Typography } from "antd";

const { Text, Title } = Typography;

const ConfirmLogoutModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      centered
      closable={false}
      bodyStyle={{ textAlign: "center", padding: "32px 24px" }}
    >
      <ExclamationCircleOutlined
        style={{ fontSize: 40, color: "#faad14", marginBottom: 16 }}
      />
      <Title level={4}>Bạn có chắc chắn muốn đăng xuất?</Title>
      <Text type="secondary">Hành động này sẽ đăng xuất khỏi hệ thống.</Text>

      <div
        style={{
          marginTop: 32,
          display: "flex",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Button onClick={onCancel}>❌ Hủy</Button>
        <Button type="primary" danger onClick={onConfirm}>
          🔓 Xác nhận đăng xuất
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmLogoutModal;

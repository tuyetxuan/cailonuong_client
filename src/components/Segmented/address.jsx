import { Icon } from "@iconify/react";
import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";

const { Option } = Select;

const Address = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [address, setAddress] = useState(null);

  const provinces = ["Hồ Chí Minh", "Hà Nội", "Đà Nẵng"];
  const districts = ["Quận 1", "Quận 3", "Quận 5"];
  const wards = ["Phường Bến Nghé", "Phường Tân Định", "Phường Đa Kao"];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        setAddress(values);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Địa chỉ của bạn</h2>
          <p className="text-gray-500">
            Địa chỉ của bạn sẽ được sử dụng để làm địa chỉ nhận hàng
          </p>
        </div>
        <Button type="primary" onClick={showModal} shape="round" size="large">
          Thêm địa chỉ mới
        </Button>
      </div>

      {address && (
        <div className="relative rounded-3xl border bg-white p-4 shadow-lg">
          <p>
            <strong>Địa chỉ:</strong>
          </p>
          <p>
            {address?.street}, {address?.ward}, {address?.district},{" "}
            {address?.province}
          </p>
          <div className="absolute top-4 right-4 flex gap-3">
            <Icon
              icon="mdi:pencil-outline"
              className="cursor-pointer text-xl transition duration-200 hover:text-[orange]"
              onClick={showModal}
            />
            <Icon
              icon="mdi:delete-outline"
              className="cursor-pointer text-xl transition duration-200 hover:text-[red]"
              onClick={() => setAddress(null)}
            />
          </div>
        </div>
      )}

      <Modal
        title="Thêm địa chỉ mới"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Thêm mới"
        cancelText="Hủy"
        centered
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            name="street"
            label="Tên đường"
            rules={[{ required: true, message: "Vui lòng nhập tên đường!" }]}
          >
            <Input placeholder="Ví dụ: 123 Lê Lợi" />
          </Form.Item>

          <Form.Item
            name="province"
            label="Tỉnh / Thành phố"
            rules={[
              { required: true, message: "Vui lòng chọn tỉnh/thành phố!" },
            ]}
          >
            <Select placeholder="Chọn tỉnh/thành phố">
              {provinces.map((province) => (
                <Option key={province} value={province}>
                  {province}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="district"
            label="Quận / Huyện"
            rules={[{ required: true, message: "Vui lòng chọn quận/huyện!" }]}
          >
            <Select placeholder="Chọn quận/huyện">
              {districts.map((district) => (
                <Option key={district} value={district}>
                  {district}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="ward"
            label="Phường / Xã"
            rules={[{ required: true, message: "Vui lòng chọn phường/xã!" }]}
          >
            <Select placeholder="Chọn phường/xã">
              {wards.map((ward) => (
                <Option key={ward} value={ward}>
                  {ward}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Address;

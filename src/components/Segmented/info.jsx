import { Button, DatePicker, Input, Select } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";

const Info = () => {
  const [formData, setFormData] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    dob: null,
    gender: "",
  });
  const [avatar, setAvatar] = useState(
    "https://futabus.vn/images/banners/avatar_test.svg",
  );

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleReset = () => {
    setFormData({
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      dob: null,
      gender: "",
    });
    setAvatar("https://futabus.vn/images/banners/avatar_test.svg");
  };

  const handleUpdate = () => {
    console.log("Updated form data:", formData);
    alert("Thông tin đã được cập nhật!");
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Kiểm tra định dạng file
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        alert("Vui lòng chọn file có định dạng .JPEG hoặc .PNG");
        return;
      }
      // Kiểm tra dung lượng file (1MB = 1 * 1024 * 1024 bytes)
      if (file.size > 1 * 1024 * 1024) {
        alert("Dung lượng file tối đa là 1MB");
        return;
      }
      // Đọc và hiển thị ảnh
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-opacity-50 flex items-center justify-center bg-gray-100">
      <div className="bg-opacity-90 w-full max-w-3xl rounded-lg bg-white p-2">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src="https://cellphones.com.vn/sforum/wp-content/uploads/2022/04/2-10.jpg"
            alt="Background"
            className="h-60 w-full object-cover"
          />
          <div className="absolute inset-0 opacity-90 backdrop-blur-2xl" />
          <div className="text-bg-white absolute inset-0 flex items-center gap-6 px-8">
            <div className="flex flex-col items-center gap-2">
              <img
                src={avatar}
                alt="Avatar"
                className="h-32 w-32 rounded-full border-2 border-white shadow-md"
              />
              <input
                type="file"
                accept=".jpeg,.jpg,.png"
                id="avatar-upload"
                onChange={handleAvatarChange}
                className="hidden"
              />
              <label htmlFor="avatar-upload">
                <Button className="mt-2" shape="round">
                  Tải ảnh lên
                </Button>
              </label>
              <p className="mt-1 text-xs text-white">
                Dung lượng tối đa 1MB. Định dạng: .JPEG, .PNG
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{formData.name}</h1>
              <p className="text-gray-200">Thành viên: Cá nhân</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Form Inputs */}
        <div className="border-t pt-6">
          <h2 className="mb-4 text-xl font-semibold">Thông tin cá nhân</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="mb-1 block font-medium text-gray-700">
                Email
              </label>
              <Input
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Nhập email"
                className="w-full"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-gray-700">
                Tên
              </label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Nhập tên"
                className="w-full"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-gray-700">
                Ngày sinh
              </label>
              <DatePicker
                value={formData.dob}
                onChange={(date) => handleInputChange("dob", date)}
                format="DD/MM/YYYY"
                placeholder="Chọn ngày sinh"
                className="w-full"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-gray-700">
                Giới tính
              </label>
              <Select
                value={formData.gender}
                onChange={(value) => handleInputChange("gender", value)}
                placeholder="Chọn giới tính"
                className="w-full"
              >
                <Select.Option value="male">Nam</Select.Option>
                <Select.Option value="female">Nữ</Select.Option>
                <Select.Option value="other">Khác</Select.Option>
              </Select>
            </div>
          </div>
          <div className="mt-8 flex justify-end gap-2 space-x-4">
            <Button onClick={handleReset} className="border-gray-300">
              Làm mới
            </Button>
            <Button type="primary" onClick={handleUpdate}>
              Cập nhật
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

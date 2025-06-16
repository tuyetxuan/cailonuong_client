import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import CardItem from "@components/CardProduct/cardItem.jsx";
import { Icon } from "@iconify/react";
import { Breadcrumb, Button, Divider, Empty, Select, Tabs, Tag } from "antd";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./customerSlider.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30px",
        height: "100px",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        right: "0px",
        bottom: "600px",
        cursor: "pointer",
        opacity: 0.9,
      }}
    >
      <Icon
        icon="mdi:chevron-right"
        className="text-bg-white"
        width="34"
        height="34"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        cursor: "pointer",
        zIndex: 1,
        left: "0px",
        bottom: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30px",
        height: "100px",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        opacity: 0.9,
      }}
    >
      <Icon
        icon="mdi:chevron-left"
        className="text-bg-white"
        width="34"
        height="34"
      />
    </div>
  );
}

const DetailsProduct = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const itemS = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    { id: 5, content: "Item 5" },
    { id: 6, content: "Item 6" },
    { id: 7, content: "Item 7" },
    { id: 8, content: "Item 8" },
    { id: 9, content: "Item 9" },
    { id: 10, content: "Item 10" },
    { id: 11, content: "Item 11" },
  ];
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src="https://cailonuong.com/wp-content/uploads/2025/03/matcha-tin0194-1.jpg"
            alt={`thumb-${i}`}
            className="h-40 w-40 rounded object-cover"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settingsSlider = {
    dots: false,
    infinite: itemS.length > 4 ? true : false,
    swipeToSlide: true,
    speed: 300,
    pauseOnHover: true,
    autoplay: true,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  const items = [
    {
      href: "/",
      title: <span className="text-xl">Home</span>,
    },
    {
      href: "/menu",
      title: <span className="text-xl">Menu bánh</span>,
    },
    {
      title: <span className="text-xl">Bánh Flan Gato</span>,
    },
  ];
  const { slug } = useParams();
  return (
    <>
      <main className="mt-[25px] mb-[25px] w-full p-0">
        <div className="max-w-container mx-auto mb-3 flex flex-col">
          <Breadcrumb
            separator={
              <span className="custom-separator">
                <Icon icon="mdi:menu-right" className="text-2xl" />
              </span>
            }
            items={items}
          />
        </div>
        <div className="max-w-container text-bg-secondary mx-auto mb-4 flex flex-nowrap items-start justify-center gap-5 space-y-4 text-justify text-base leading-relaxed">
          <div className="details-show--slider flex w-[50%] items-center justify-center overflow-hidden rounded-lg">
            <Slider {...settings}>
              <img
                src="https://cailonuong.com/wp-content/uploads/2025/03/matcha-tin0195.jpg"
                alt=""
                className="max-w-[100%]"
              />
              <img
                src="https://cailonuong.com/wp-content/uploads/2025/03/matcha-tin0195.jpg"
                alt=""
                className="max-w-[100%]"
              />
              <img
                src="https://cailonuong.com/wp-content/uploads/2025/03/matcha-tin0195.jpg"
                alt=""
                className="max-w-[100%]"
              />
              <img
                src="https://cailonuong.com/wp-content/uploads/2025/03/matcha-tin0195.jpg"
                alt=""
                className="max-w-[100%]"
              />
            </Slider>
          </div>
          <div className="w-[50%] p-4">
            <p className="mb-[10px] text-3xl font-bold">
              Sweetin – Matcha Opera
            </p>
            <Divider />
            <p className="text-bg-orange mb-[10px] text-2xl font-bold">
              1.000.000đ
            </p>
            <Divider />
            <div className="mx-auto max-w-xl space-y-6 bg-white text-base leading-relaxed text-gray-800">
              <div>
                <h2 className="mb-2 text-xl font-semibold text-green-700">
                  Hương vị
                </h2>
                <p className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-green-800">
                    Ngọt dịu
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-green-800">
                    Chua nhẹ
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-green-800">
                    Mềm mịn
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-green-800">
                    Đậm vị matcha
                  </span>
                </p>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-semibold text-green-700">
                  Cấu trúc bánh
                </h2>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    <strong>Từ dưới lên:</strong>
                  </li>
                  <li>Lớp bánh hạnh nhân nướng được thấm syrup</li>
                  <li>Kem bơ sữa chua trà xanh (buttercream) mềm mịn</li>
                  <li>Nhân mứt phúc bồn tử được nấu thủ công đậm vị</li>
                  <li>Lớp bánh hạnh nhân nướng được thấm syrup</li>
                  <li>Kem bơ sữa chua trà xanh (buttercream) mềm mịn</li>
                  <li>
                    Lớp chocolate tươi trà xanh (nama matcha) phủ mặt bánh
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-semibold text-green-700">
                  Bảo quản
                </h2>
                <p>
                  Bánh nên được dùng trong ngày và sẽ ngon hơn khi được bảo quản
                  lạnh trước khi thưởng thức.
                </p>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-semibold text-green-700">
                  Phụ kiện tặng kèm
                </h2>
                <ul className="list-inside list-disc">
                  <li>1 thìa lá bạc</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-semibold text-green-700">
                  Phân loại
                </h2>
                <p>Bánh hủ thiếc</p>
              </div>
              <div className="flex flex-nowrap items-center justify-start gap-3">
                <span className="text-xl font-bold">Chọn kích thước: </span>
                <Select
                  placeholder="Chọn kích cỡ"
                  className="w-[30%]"
                  size="large"
                  defaultValue="18cm"
                />
              </div>
              <div className="flex flex-nowrap items-center justify-start gap-4">
                <div className="flex h-[40px] max-w-144 items-center justify-between gap-6 rounded-lg border px-2">
                  <div className="flex cursor-pointer items-center justify-between">
                    <MinusOutlined />
                  </div>
                  <div className="flex items-center justify-between">1</div>
                  <div className="flex cursor-pointer items-center justify-between">
                    <PlusOutlined />
                  </div>
                </div>
                <Button
                  block
                  size="large"
                  type="primary"
                  className="bg-bg-orange hover:bg-bg-orange rounded-lg p-14 text-white"
                  style={{ boxShadow: "none" }}
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-4">
                <Tag>Mã: N/A</Tag>
                <Tag>Thương hiệu: Cái Lò Nướng</Tag>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-4">
                <p style={{ margin: 0 }} className="text-bg-orange font-bold">
                  Danh mục:{" "}
                </p>
                <Button color="default" variant="filled" href="#">
                  Bánh sinh nhật
                </Button>
                <Button color="default" variant="filled" href="#">
                  Bánh gato
                </Button>
                <Button color="default" variant="filled" href="#">
                  Bánh kem
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-container text-bg-secondary mx-auto mb-8 flex flex-col space-y-4 text-justify text-base leading-relaxed">
          <Tabs defaultActiveKey="1" className="w-full">
            <Tabs.TabPane tab="Mô tả" key="1">
              <div className="bg-bg-white text-bg-secondary max-w-[70%] py-5 leading-relaxed">
                <h1 className="text-2xl font-bold text-pink-700">
                  Bánh Mousse Ổi hồng & Chanh dây
                </h1>
                <p>
                  <strong>Cái Lò Nướng</strong> đã lấy cảm hứng từ trái{" "}
                  <strong>ổi xá lị</strong> – loại quả nhiều nước, ít đường, ít
                  hạt và ít tinh bột, rất phù hợp để chế biến bánh ngọt – để tạo
                  nên chiếc bánh mousse đặc biệt này. Kết hợp cùng{" "}
                  <strong>phúc bồn tử</strong> và{" "}
                  <strong>sô-cô-la trắng</strong>, phần mousse mang đến hương vị
                  chua ngọt cân bằng, dịu nhẹ.
                </p>
                <p>
                  Bánh có hai lớp nhân được chế biến thủ công nhằm giữ nguyên
                  hương vị trái cây nguyên bản. Lớp nhân ổi xá lị được cắt hạt
                  lựu, tạo cảm giác <strong>sần sật</strong> khi nhai, trong khi
                  lớp nhân <strong>chanh dây</strong> lại mang đến cảm giác{" "}
                  <strong>mềm và tươi mát</strong>.
                </p>
                <p className="font-medium text-pink-600 italic">
                  Đây là mẫu bánh mousse có nhiều lớp nhất hiện nay tại Cái Lò
                  Nướng.
                </p>
                <div>
                  <h2 className="mb-2 text-lg font-semibold text-pink-700">
                    Xem thêm các loại bánh khác:
                  </h2>
                  <ul className="grid list-inside list-disc grid-cols-2 gap-2 text-pink-900">
                    <li>
                      <a href="#" className="hover:underline">
                        Bánh kem sinh nhật
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Bánh Entrement
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Bánh kem bắp
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Bánh Flan Gato
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Bánh Trung Thu
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Thông tin sản phẩm" key="2">
              <div className="p-6">
                <Empty
                  description={
                    <span className="text-xl">
                      Chưa cập nhật thông tin sản phẩm
                    </span>
                  }
                />
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="max-w-container text-bg-secondary mx-auto flex flex-col space-y-4 text-justify text-base leading-relaxed">
          <div
            className={`mb-[10px] flex items-center justify-between text-3xl font-bold`}
          >
            <span>GỢI Ý CÁC SẢN PHẨM TƯƠNG TỰ</span>
            <div className="flex items-center justify-center gap-2">
              <Button size="large" variant="dashed" onClick={previous}>
                <HiChevronLeft size={30} className="text-bg-primary" />
              </Button>
              <Button size="large" variant="dashed" onClick={next}>
                <HiChevronRight size={30} className="text-bg-primary" />
              </Button>
            </div>
          </div>
          <div className="details--slider">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settingsSlider}
            >
              {itemS.map((item) => (
                <CardItem key={item.id} content={item.content} />
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailsProduct;

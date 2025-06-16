import CardItem from "@components/CardProduct/cardItem.jsx";
import { Icon } from "@iconify/react";
import { Breadcrumb } from "antd";
import { useParams } from "react-router-dom";

const MenuProduct = () => {
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
            separator={<Icon icon="mdi:menu-right" className="text-3xl" />}
            items={items}
          />
        </div>
        <div className="max-w-container text-bg-secondary mx-auto mb-4 flex flex-col space-y-4 text-justify text-base leading-relaxed">
          <p>
            <strong>Bánh Flan Gato</strong> của <strong>Cái Lò Nướng</strong> là
            dòng bánh được nhiều khách hàng tại Sài Gòn yêu thích và chọn dùng
            trong những buổi tiệc. Kể từ khi ra mắt, Flan Gato chưa bao giờ “hạ
            nhiệt” bởi sự kết hợp hoàn hảo giữa lớp bánh flan “núng nính” và cốt
            bánh gato chocolate mềm xốp, mang vị đắng nhẹ tinh tế.
          </p>
          <p>
            Mặt bánh được bao phủ bởi lớp <strong>jelly caramel</strong> béo
            nhẹ, thơm dịu và được trang trí bằng{" "}
            <strong>trái cây theo mùa</strong> như dâu tươi, đào hoặc việt quất.
            Hương vị bánh là sự hòa quyện giữa <strong>vị ngọt thanh</strong> và{" "}
            <strong>đắng nhẹ</strong>, kết hợp với vị chua mát từ trái cây tươi,
            tạo nên một tổng thể hài hòa và độc đáo.
          </p>
          <p>
            <strong>Cái Lò Nướng</strong> luôn sáng tạo ra nhiều mẫu trang trí
            khác nhau cho dòng bánh Flan Gato, mang đến sự mới mẻ mỗi lần khách
            hàng lựa chọn. Mỗi chiếc bánh là một trải nghiệm vị giác riêng biệt,
            tạo nên dấu ấn khó quên trong lòng thực khách.
          </p>
        </div>
        <div className="max-w-container mx-auto flex flex-col space-y-4 text-justify text-base leading-relaxed text-gray-800">
          <p className="mb-[30px] text-2xl font-bold">
            DANH SÁCH CÁC SẢN PHẨM{" "}
            <span className="bg-bg-orange px-2" style={{ borderRadius: 10 }}>
              BÁNH PLAN GATO
            </span>
          </p>
          <CardItem />
        </div>
      </main>
    </>
  );
};

export default MenuProduct;

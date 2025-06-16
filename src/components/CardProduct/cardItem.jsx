import CardStyles from "@components/CardProduct/stylesCard.module.scss";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const imageUrls = [
  "https://cailonuong.com/wp-content/uploads/2024/12/sweetin-49-480x720.jpg",
  "https://cailonuong.com/wp-content/uploads/2025/02/sweetin-vlt-19-1-1-768x1152.jpg",
  "https://cailonuong.com/wp-content/uploads/2024/04/Khong-cat_2x3_08-1-480x720.jpg",
  "https://cailonuong.com/wp-content/uploads/2024/10/banhbap0042-2-480x720.jpg",
  "https://cailonuong.com/wp-content/uploads/2025/05/CLN36794-1-768x1152.jpg",
  "https://cailonuong.com/wp-content/uploads/2025/04/banhbap0439-1-768x1152.jpg",
  "https://cailonuong.com/wp-content/uploads/2025/05/CLN36794-1-768x1152.jpg",
  "https://cailonuong.com/wp-content/uploads/2024/11/ThienNgaXanh-7-2-480x720.jpg",
  "https://cailonuong.com/wp-content/uploads/2024/11/basic-2-2-480x720.jpg",
  "https://cailonuong.com/wp-content/uploads/2024/11/basic-4-2-480x720.jpg",
  "https://cailonuong.com/wp-content/uploads/2025/03/sweetaway-combo-3-768x1152.jpg"
];

const CardItem = ({ product }) => {
  const isOutOfStock = false;
  const discount = 0;
  const navigate = useNavigate();
  
  // Randomly select an image from the array
  const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  
  return (
      <div
          className={`relative ${isOutOfStock ? CardStyles.grayscaleOverlay : ""}`}
      >
        {!discount && discount > 0 && (
            <div className={CardStyles.discountBadge}>Giảm 20%</div>
        )}
        <Card
            onClick={() => navigate("/menu-banh/matcha-azuki")}
            hoverable
            bodyStyle={{ padding: "10px" }}
            cover={
              <img
                  alt="product"
                  src={randomImage}
                  className="transition-transform duration-300 hover:scale-110"
              />
            }
        >
          <Meta
              title={
                  "Sweetin – Matcha Azuki (Đậu đỏ) " + Math.floor(Math.random() * 100)
              }
              description="Ngọt dịu – Mềm mịn – đậm vị matcha"
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="mt-2 flex flex-col items-start justify-between">
              {discount > 0 && (
                  <span className="text-bg-gray text-[15px] font-bold line-through">
                250.000đ{" "}
              </span>
              )}
              <span className="text-text-orange text-[20px] font-bold">
              Giá: {discount ? 200000 - (200000 * discount) / 100 : 200000}đ
            </span>
            </div>
            <button
                className={`bg-bg-orange cursor-pointer rounded px-4 py-2 font-bold text-white ${CardStyles.btn_buy}`}
                disabled={isOutOfStock}
            >
              Thêm vào giỏ
            </button>
          </div>
        </Card>
        {isOutOfStock && <div className={CardStyles.overlayLabel}>Hết hàng</div>}
      </div>
  );
};

export default CardItem;

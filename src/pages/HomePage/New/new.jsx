import CardItem from "@components/CardProduct/cardItem.jsx";
import { Icon } from "@iconify/react";
import StylesHome from "@pages/HomePage/homeStyles.module.scss";
import Slider from "react-slick";
import "./newStyles.scss";

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
        bottom: "230px",
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
        bottom: "230px",
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

const New = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Icon
            icon="octicon:dot-fill-16"
            width="16"
            height="16"
            style={{ color: "#45612D" }}
          />
        </a>
      );
    },
    dots: true,
    infinite: false,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 4,
    draggable: true,
    slidesToScroll: 1,
    dotsClass: "cus-slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="max-w-container mx-auto">
      <h1
        className={`mb-[25px] text-3xl font-bold ${StylesHome.boder_Highline__NewProduct}`}
      >
        SẢN PHẨM MỚI
      </h1>
      <div className="new--slider">
        <Slider {...settings}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Slider>
      </div>
    </div>
  );
};

export default New;

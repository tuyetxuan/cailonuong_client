import CardItem from "@components/CardProduct/cardItem.jsx";
import { Icon } from "@iconify/react";
import StylesHome from "@pages/HomePage/homeStyles.module.scss";
import { Button } from "antd";
import { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Slider from "react-slick";
import "./favoriteStyles.scss";

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

const Favorite = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    swipeToSlide: true,
    draggable: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="max-w-container mx-auto">
      <div
        className={`mb-[25px] text-3xl font-bold ${StylesHome.boder_Highline__Favorite}`}
      >
        <span className="text-bg-orange">Được nhiều khách hàng yêu thích</span>
        <div className="flex items-center justify-center gap-2">
          <Button size="large" variant="dashed" onClick={previous}>
            <HiChevronLeft size={30} className="text-bg-primary" />
          </Button>
          <Button size="large" variant="dashed" onClick={next}>
            <HiChevronRight size={30} className="text-bg-primary" />
          </Button>
        </div>
      </div>
      <div className="favorite--slider">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
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

export default Favorite;

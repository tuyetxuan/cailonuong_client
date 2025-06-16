import ImageBanner from "@images/banner/website-_1_-1536x480.jpg";

const Banner = ({ data }) => {
  return (
    <div className="banner">
      <div className="mb-3 w-full">
        <img src={ImageBanner} alt="Logo" className="w-[100%] cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner;

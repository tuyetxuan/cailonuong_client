import Banner from "@components/Banner/banner.jsx";
import Favorite from "@pages/HomePage/Favorite/favorite.jsx";
import New from "@pages/HomePage/New/new.jsx";

const Home = () => {
  return (
    <main className="m-0 mb-[25px] w-full p-0">
      <Banner />
      <New />
      <div className="mb-15"></div>
      <Favorite />
      <div className="mb-15"></div>
      <div className="max-w-container mx-auto flex flex-col items-center justify-center">
        <div className="group relative inline-block">
          <button className="border-bg-secondary relative z-10 cursor-pointer overflow-hidden rounded px-6 py-3 font-semibold transition-all duration-300 hover:border-transparent">
            <a href="/menu">Xem Menu Chi Tiết</a>
          </button>
          <div className="from-text-orange via-bg-primary to-bg-orange animate-gradient-x absolute inset-0 z-0 rounded bg-gradient-to-r bg-[length:200%_200%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      </div>
    </main>
  );
};

export default Home;

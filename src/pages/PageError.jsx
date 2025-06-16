const PageError = () => {
  return (
    <div>
      {" "}
      <div
        className="flex flex-col items-center justify-center px-6 py-12"
        style={{ minHeight: "calc(100vh - 110px - 248.4px)" }}
      >
        <div className="mb-8 text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.172 9.172a4 4 0 015.656 5.656M9 19H5a2 2 0 01-2-2v-3a9 9 0 0118 0v3a2 2 0 01-2 2h-4m-6 0v-3m6 3v-3"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-6xl font-bold text-gray-800">ERROR</h1>
        <p className="mb-8 text-center text-lg text-gray-600">
          Oops! Trang bạn tìm kiếm không tồn tại.
          <br />
          Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
        </p>
        <a
          href="/"
          className="bg-bg-primary text-bg-white hover:bg-bg-orange rounded-full px-6 py-3 font-semibold transition-all"
        >
          Quay về Trang Chủ
        </a>
      </div>
    </div>
  );
};

export default PageError;

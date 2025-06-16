const Page404 = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-12">
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
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-8 text-center text-lg text-gray-600">
          Oops! Trang bạn tìm kiếm không tồn tại.
          <br />
          Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
        </p>
        <a
          href="/"
          className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-600"
        >
          Quay về Trang Chủ
        </a>
      </div>
    </div>
  );
};

export default Page404;

const BranchInfo = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-12 p-6">
      {/* Danh sách chi nhánh */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Cái Lò Nướng</h2>
        <h3 className="mb-2 text-lg font-semibold">
          Các chi nhánh của Cái Lò Nướng:
        </h3>
        <ul className="list-inside list-disc space-y-1 text-gray-700">
          <li>
            <strong>CN1:</strong> 15K Nguyễn Thị Minh Khai – P. Bến Nghé – Quận
            1
          </li>
          <li>
            <strong>CN2:</strong> 173 Nguyễn Thái Học – P. Phạm Ngũ Lão – Quận 1
          </li>
          <li>
            <strong>CN3:</strong> 29 Lê Văn Việt – P. Hiệp Phú – TP Thủ Đức
          </li>
          <li>
            <strong>CN4:</strong> 186 Quang Trung – Phường 10 – Quận Gò Vấp
          </li>
          <li>
            <strong>CN5:</strong> 477 Nguyễn Thị Thập – P. Tân Phong – Quận 7
          </li>
          <li>
            <strong>CN6:</strong> 2A Ba Gia – P.7 – Quận Tân Bình
          </li>
        </ul>

        {/* Hotline */}
        <p className="mt-4 text-gray-700">
          <span className="font-semibold">Hotline:</span>{" "}
          <a href="tel:02888883388" className="text-orange-500 hover:underline">
            028.8888.3388
          </a>
        </p>

        {/* Phản hồi */}
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Phản hồi chất lượng dịch vụ:</span>{" "}
          <a href="tel:02888883388" className="text-orange-500 hover:underline">
            028.8888.3388
          </a>
        </p>
      </div>

      {/* Giờ mở cửa */}
      <div className="rounded-lg border bg-gray-50 p-6">
        <h3 className="mb-2 text-center text-2xl font-bold">Giờ mở cửa</h3>
        <p className="mb-4 text-center text-orange-400 italic">
          tất cả các ngày trong tuần
        </p>
        <div className="flex justify-center font-medium text-gray-700">
          <span>Thứ Hai - Chủ nhật:&nbsp;</span>
          <span>8:00 - 22:00</span>
        </div>
      </div>
    </div>
  );
};

export default BranchInfo;

const Delivery = () => {
  return (
    <main className="mt-[25px] mb-[25px] w-full p-0">
      <div className="max-w-container mx-auto flex flex-col items-center">
        <div className="section_wrapper">
          <div className="mx-auto max-w-5xl space-y-10 rounded-2xl bg-white p-8 shadow-xl">
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-800">
                Chính Sách Giao Hàng
              </h1>
              <p className="text-gray-600">
                Cập nhật ngày <strong>01/12/2020</strong>
              </p>
            </div>
            <section className="space-y-6 leading-relaxed text-gray-700">
              <div className="rounded-xl border bg-gray-50 p-6">
                <h2 className="mb-3 text-2xl font-semibold text-gray-800">
                  1. Đội ngũ giao hàng riêng
                </h2>
                <p>
                  Chúng tôi xây dựng đội ngũ giao hàng riêng để đảm bảo khách
                  hàng có trải nghiệm mua hàng tốt nhất. Hiện nay,{" "}
                  <strong>Cái Lò Nướng</strong> giao hàng đến các quận, huyện
                  tại khu vực Thành Phố Hồ Chí Minh vào tất cả các ngày trong
                  tuần.
                </p>
              </div>
              <div className="rounded-xl border bg-gray-50 p-6">
                <h2 className="mb-3 text-2xl font-semibold text-gray-800">
                  2. Phí giao hàng
                </h2>
                <p>
                  Khách hàng có thể biết chính xác phí giao hàng khi nhập địa
                  chỉ nhận hàng tại <strong>form đặt hàng</strong>. Nếu cần giải
                  đáp thêm về phí giao hàng hoặc khu vực giao hàng, vui lòng
                  liên hệ:
                </p>
                <p className="mt-3">
                  <strong>Hotline:</strong> 028.8888.3388
                </p>
              </div>
              <div className="rounded-xl border bg-gray-50 p-6">
                <h2 className="mb-3 text-2xl font-semibold text-gray-800">
                  3. Thời gian giao hàng
                </h2>
                <p>
                  Dựa trên thông tin đặt hàng, chúng tôi sẽ cố gắng giao hàng
                  đến địa chỉ nhận hàng với chênh lệch tối đa{" "}
                  <strong>30 phút</strong> (hoặc có thể sớm hơn tùy tuyến đường,
                  điều kiện giao thông và thời tiết).
                </p>
                <p className="mt-3">
                  Trong mọi trường hợp, nhân viên giao hàng sẽ liên hệ với khách
                  hàng để xác nhận trước khi giao.
                </p>
              </div>
              <div className="rounded-xl border bg-gray-50 p-6">
                <h2 className="mb-3 text-2xl font-semibold text-gray-800">
                  4. Kiểm tra sản phẩm khi nhận hàng
                </h2>
                <p>Khi nhận bánh, khách hàng vui lòng kiểm tra kỹ:</p>
                <ul className="mt-3 list-inside list-disc space-y-2">
                  <li>Bánh đã đúng theo yêu cầu đặt hàng.</li>
                  <li>Phụ kiện đi kèm đầy đủ.</li>
                </ul>
                <p className="mt-3">
                  Điều này giúp chúng tôi xử lý sự cố (nếu có) nhanh chóng nhất.
                  Nếu phát hiện sự cố sau khi nhân viên giao hàng đã rời đi,
                  chúng tôi sẽ hỗ trợ một số trường hợp nhất định. Tuy nhiên,
                  thời gian hỗ trợ có thể sẽ lâu hơn. Mong quý khách hàng thông
                  cảm.
                </p>
              </div>
              <div className="rounded-xl border bg-gray-50 p-6">
                <h2 className="mb-3 text-2xl font-semibold text-gray-800">
                  5. Chính sách trả hàng - hoàn tiền
                </h2>
                <p>
                  Quý khách hàng vui lòng tham khảo thêm chi tiết tại liên kết
                  sau:
                </p>
                <a
                  href="https://cailonuong.com/chinh-sach-tra-hang-hoan-tien/"
                  target="_blank"
                  className="mt-3 inline-block font-semibold text-blue-600 hover:underline"
                  rel="noreferrer"
                >
                  Chính sách trả hàng - hoàn tiền
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Delivery;

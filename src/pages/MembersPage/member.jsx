const Member = () => {
  return (
    <main className="mt-[25px] mb-[25px] w-full p-0">
      <div className="max-w-container mx-auto flex flex-col">
        <img
          src="https://cailonuong.com/wp-content/uploads/2023/08/membership.jpg"
          alt="membership"
          className="m-auto h-[400px] w-[400px]"
        />
        <div className="mx-auto max-w-5xl space-y-10 rounded-2xl bg-white p-8 shadow-xl">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              Tri ân Quý Khách Hàng
            </h1>
            <p className="leading-relaxed text-gray-600">
              Cảm ơn quý khách hàng đã luôn tin tưởng lựa chọn{" "}
              <strong>Cái Lò Nướng</strong> cho những bữa tiệc ngọt ngào. Chúng
              tôi xin gửi đến quý khách những ưu đãi hấp dẫn chỉ dành riêng cho
              khách hàng thân thiết.
            </p>
          </div>
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              A. Khách hàng thân thiết
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">
                  Đối với khách mua tại cửa hàng:
                </h3>
                <p>
                  Nhân viên sẽ hỗ trợ đăng ký thông tin thành viên sau khi quý
                  khách hoàn thành hóa đơn mua hàng đầu tiên.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">
                  Đối với khách đặt hàng online:
                </h3>
                <p>
                  Hệ thống sẽ tự động tạo tài khoản thành viên dựa trên số điện
                  thoại đặt hàng lần đầu tiên tại fanpage{" "}
                  <strong>Cái Lò Nướng</strong>.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              B. Chính sách Member / VIP
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-blue-600">Member</h3>
                <p className="mb-3 text-gray-700">
                  Tích lũy từ: <strong>800k</strong>
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>Freeship đơn nội thành 30k</li>
                  <li>Voucher giảm 15% trong tuần sinh nhật</li>
                </ul>
              </div>
              <div className="rounded-xl border bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-blue-600">
                  VIP Silver
                </h3>
                <p className="mb-3 text-gray-700">
                  Tích lũy từ: <strong>1.5 triệu - dưới 2.5 triệu</strong>
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>Giảm 10% tất cả đơn hàng</li>
                  <li>Freeship đơn nội thành 30k</li>
                  <li>Voucher giảm 15% trong tuần sinh nhật</li>
                </ul>
              </div>
              <div className="rounded-xl border bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-yellow-600">
                  VIP Gold
                </h3>
                <p className="mb-3 text-gray-700">
                  Tích lũy từ: <strong>2.5 triệu - dưới 5 triệu</strong>
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>Giảm 10% tất cả đơn hàng</li>
                  <li>Freeship đơn nội thành 40k</li>
                  <li>Voucher giảm 20% trong tuần sinh nhật</li>
                </ul>
              </div>
              <div className="rounded-xl border bg-gray-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-purple-600">
                  VIP Diamond
                </h3>
                <p className="mb-3 text-gray-700">
                  Tích lũy từ: <strong>5 triệu</strong>
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-600">
                  <li>Giảm 15% tất cả đơn hàng</li>
                  <li>Freeship mọi đơn nội thành</li>
                  <li>Voucher giảm 20% trong tuần sinh nhật</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mt-10 mb-4 text-2xl font-semibold text-gray-800">
              Quy định chung
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Chương trình và gia hạn thành viên cập nhật hàng năm.</li>
              <li>Ưu đãi áp dụng cho sản phẩm nguyên giá.</li>
              <li>
                Ưu tiên chương trình khuyến mãi cao nhất khi có nhiều ưu đãi.
              </li>
              <li>Thành viên nhận tin khuyến mãi và sản phẩm mới.</li>
              <li>Tham gia chương trình ưu đãi riêng cho khách VIP.</li>
              <li>Áp dụng tại cửa hàng và online store.</li>
              <li>
                Không áp dụng chung với ưu đãi thanh toán qua ứng dụng Grab.
              </li>
              <li>
                Cái Lò Nướng có quyền cập nhật điều khoản theo tình hình thực
                tế.
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              Mọi thắc mắc vui lòng liên hệ Hotline:{" "}
              <strong>028.8888.3388</strong> hoặc Email:{" "}
              <strong>cailonuong@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
      {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">*/}
      {/*    {Array.from({ length: 8 }).map((_, index) => (*/}
      {/*        <div*/}
      {/*            key={index}*/}
      {/*            className="relative p-[2px] rounded-xl overflow-hidden"*/}
      {/*            style={{*/}
      {/*                background: 'linear-gradient(43deg, #45612D 0%, #bfbc5b 46%, #bfbc5b 100%)',*/}
      {/*            }}*/}
      {/*        >*/}
      {/*            <div className="bg-white rounded-xl p-6 h-full flex flex-col items-center justify-center">*/}
      {/*                <div className="bg-gradient-to-r from-[#45612D] to-[#bfbc5b] p-3 rounded-full mb-4">*/}
      {/*                    <Icon icon="mdi:cake" width="40" height="40" className="text-[#45612D]" />*/}
      {/*                </div>*/}
      {/*                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bánh Ngọt {index + 1}</h3>*/}
      {/*                <p className="text-sm text-gray-600 text-center">*/}
      {/*                    Bánh ngọt thơm ngon, mềm mại, hấp dẫn với lớp kem mịn màng.*/}
      {/*                </p>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    ))}*/}
      {/*</div>*/}
    </main>
  );
};

export default Member;

const Footer = () => {
  return (
    <div className="py-4 px-2 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-4 text-gray-800">
        {/* 1 */}
        <div className="space-y-6">
          <p className="text-black font-semibold text-lg uppercase">VTON</p>
          <ul className="list-disc space-y-2">
            <li>Giới thiệu</li>
            <li>Kiểm tra đơn hàng</li>
            <li>Cách chọn size</li>
            <li>Thông tin liên hệ</li>
            <li>Câu hỏi thường gặp</li>
            <li>Hướng dẫn bảo quản</li>
          </ul>
        </div>
        {/* 2 */}
        <div className="space-y-6">
          <p className="text-black font-semibold text-lg uppercase">CHÍNH SÁCH</p>
          <ul className="list-disc space-y-2">
            <li>Hướng dẫn mua hàng</li>
            <li>Khách hàng thân thiết</li>
            <li>Chính sách đổi hàng</li>
            <li>Chính sách bảo mật</li>
            <li>Đối tác sản xuất</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* 3 */}
        <div className="space-y-6">
          <p className="text-black font-semibold text-lg uppercase">Kết nối với Vton</p>
          <ul className="list-disc space-y-2">
            <li>Facebook</li>
            <li>Gmail</li>
            <li>Instagram</li>
            <li>Tiktok</li>
          </ul>
        </div>
        {/* 4 */}
        <div className="space-y-6">
          <p className="text-black font-semibold text-lg uppercase">Thông tin cửa hàng</p>
          <ul className="list-disc space-y-2">
            <li>20 Cửu Long, P15, Q.10, HCM</li>
            <li>168 Nguyễn Trọng Tuyển, P8, Phú Nhuận</li>
            <li>Hotline: (028) 7300 6200</li>
            <li>Mail: vton@gmail.com</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-900 border-t border-dashed border-stone-200 pt-4">Copyright © 2025 VTON</p>
    </div>
  );
};

export default Footer;

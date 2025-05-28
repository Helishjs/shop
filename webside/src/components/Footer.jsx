
export const Footer = () => {
    return (
        <footer className="text-white bg-gradient-to-r from-cyan-200 to-blue-400 py-6">
            <div className="mx-10 px-4">
                {/* Dùng flex cho desktop, tự động xuống dòng trên mobile */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

                    {/* Cột 1: Logo & Mô tả */}
                    <div className="flex flex-col items-center md:items-start w-full md:w-1/3 text-center md:text-left mt-10">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <img src="/image/logorm.png" alt="Logorm" className="w-20" />
                            IBOOK
                        </h1>
                        <p className="mt-2 text-sm text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Cột 2: Danh mục */}
                    <div className="flex flex-col items-center w-full md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-4">Danh mục</h2>
                        <ul className="space-y-1 text-center">
                            <li><a href="#" className="hover:text-gray-400">Trang chủ</a></li>
                            <li><a href="#" className="hover:text-gray-400">Sách khoa học</a></li>
                            <li><a href="#" className="hover:text-gray-400">Truyện tranh</a></li>
                            <li><a href="#" className="hover:text-gray-400">Sách nghiên cứu</a></li>
                            <li><a href="#" className="hover:text-gray-400">Top phổ biến</a></li>
                        </ul>
                    </div>

                    {/* Cột 3: Hỗ trợ */}
                    <div className="flex flex-col items-center md:items-end w-full md:w-1/3 text-center md:text-right">
                        <h2 className="text-2xl font-semibold mb-4">Hỗ trợ</h2>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-gray-400">Giới thiệu</a></li>
                            <li><a href="#" className="hover:text-gray-400">Liên hệ</a></li>
                            <li><a href="#" className="hover:text-gray-400">Chính sách bảo mật</a></li>
                            <li><a href="#" className="hover:text-gray-400">Điều khoản sử dụng</a></li>
                            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} IBOOK. Tất cả quyền được bảo lưu.
                </div>
            </div>
        </footer>
    );
};

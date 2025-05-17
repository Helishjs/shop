import React from 'react';

export const Banner = () => {
    return (
        <div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-6xl m-auto gap-6 p-6 mb-8 shadow-lg">
                {/* Phần ảnh */}
                <div className="flex justify-center items-center">
                    <img
                        src="/image/Banner-removebg-preview.png"
                        alt="Banner"
                        className="max-w-lg bg-gradient-to-r from-cyan-200 to-blue-300 p-4 rounded-lg shadow-md"
                    />
                </div>

                {/* Phần nội dung */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 items-center mb-2">
                        Mùa đông sắp tới, sale sập sàn lên đến 50%
                    </h2>
                    <p className="text-gray-600 mb-7">
                        Hãy để những trang sách dẫn lối bạn vào những hành trình kỳ diệu, nơi mỗi câu chữ đều mang đến
                        hơi ấm và nguồn cảm hứng bất tận trong những ngày đông lạnh giá!
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <i className="fas fa-star text-yellow-500 text-xl mr-2"></i>
                            Những cuốn sách chất lượng
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-star text-yellow-500 text-xl mr-2"></i>
                            Hàng chính hãng
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-star text-yellow-500 text-xl mr-2"></i>
                            Cập nhật sớm nhất thị trường
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-star text-yellow-500 text-xl mr-2"></i>
                            Giá cả phải chăng
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" flex  flex-col bg-gradient-to-r from-cyan-200 to-blue-300 p-9 shadow-md items-center">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">Gửi email để nhận được những thông báo mới nhất của chúng tôi</h2>
                <input type="text" placeholder="Nhập email" className="bg-white w-2/5 px-4 py-3 border-none font-medium outline-none"/>
            </div>
        </div>
    );
};

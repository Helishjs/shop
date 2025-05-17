import React from "react";

export const Hero = () => {
    return (
        <div className="hero relative w-full px-6 bg-gradient-to-r from-cyan-200 to-blue-300 py-20 overflow-hidden">
            {/* Background Decorative */}
            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto items-center gap-x-10">
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
                        Mỗi ngày một ưu đãi – <br className="hidden md:block" />
                        <span className="text-cyan-600">Hôm nay giảm ngay 40%!</span>
                    </h1>
                    <p className="text-gray-800 mt-4 text-lg">
                        Khám phá kho tàng tri thức – Mỗi cuốn sách là một hành trình!
                        Sách yêu thích của bạn đang giảm giá – Săn ngay!
                    </p>
                    <button className="mt-6 bg-cyan-600 text-white rounded-md py-3 px-6 font-semibold shadow-lg hover:bg-cyan-500 transition duration-300">
                        Mua ngay
                    </button>
                </div>

                <div className="flex justify-center">
                    <img src="/image/hero.webp" alt="hero"
                         className="h-[500px] w-[500px] md:h-[600px] md:w-[600px] rounded-3xl shadow-lg" />
                </div>
            </div>
        </div>
    );
};

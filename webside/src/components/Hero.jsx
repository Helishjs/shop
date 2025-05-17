import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="text-center md:text-left">
                        <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                            Khuyến mãi đặc biệt
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Mỗi ngày một ưu đãi
                            <span className="block text-blue-100 mt-2">Hôm nay giảm ngay 40%!</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl mx-auto md:mx-0">
                            Khám phá kho tàng tri thức – Mỗi cuốn sách là một hành trình!
                            Sách yêu thích của bạn đang giảm giá – Săn ngay!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="/store"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Mua ngay
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors"
                            >
                                Tìm hiểu thêm
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-4 text-center md:text-left">
                            <div>
                                <div className="text-3xl font-bold text-white">10K+</div>
                                <div className="text-sm text-blue-100">Sách hay</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">5K+</div>
                                <div className="text-sm text-blue-100">Khách hàng</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">99%</div>
                                <div className="text-sm text-blue-100">Hài lòng</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative">
                        <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="/image/hero.webp"
                                alt="Hero Books"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl animate-float" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl animate-float-delayed" />
                    </div>
                </div>
            </div>

            {/* Wave Shape Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-16 text-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path
                        fill="currentColor"
                        d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z"
                    />
                </svg>
            </div>
        </section>
    );
};

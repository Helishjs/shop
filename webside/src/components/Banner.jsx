import React from 'react';
import { Link } from 'react-router-dom';

export const Banner = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Banner */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-400 shadow-2xl">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 mix-blend-multiply" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/image/pattern.svg')] opacity-10" />
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 md:p-12">
                        {/* Content */}
                        <div className="text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                Mùa đông sắp tới, 
                                <span className="block text-yellow-300 mt-2">Sale sập sàn lên đến 50%</span>
                            </h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Hãy để những trang sách dẫn lối bạn vào những hành trình kỳ diệu, nơi mỗi câu chữ đều mang đến
                                hơi ấm và nguồn cảm hứng bất tận trong những ngày đông lạnh giá!
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    'Những cuốn sách chất lượng',
                                    'Hàng chính hãng',
                                    'Cập nhật sớm nhất thị trường',
                                    'Giá cả phải chăng'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to="/store"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Khám phá ngay
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <img
                                    src="/image/Banner-removebg-preview.png"
                                    alt="Banner"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl animate-float" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl animate-float-delayed" />
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-6 py-12 sm:px-12 lg:px-16">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Nhận thông báo mới nhất từ chúng tôi
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Đăng ký để nhận thông tin về sách mới, khuyến mãi đặc biệt và nhiều hơn nữa
                            </p>
                            <div className="max-w-md mx-auto">
                                <div className="flex gap-4">
                                    <input
                                        type="email"
                                        placeholder="Nhập email của bạn"
                                        className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

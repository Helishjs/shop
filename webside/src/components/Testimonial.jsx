import React, { useState } from "react";

export const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);

    const testimonials = [
        {
            name: "Nguyễn Văn A",
            role: "Độc giả thường xuyên",
            image: "/image/avata2.jpg",
            rating: 5,
            content: "Những cuốn sách ở đây đều có chất lượng in ấn tốt, giấy đẹp, và nội dung cực kỳ hữu ích. Mình rất hài lòng khi mua sách tại đây!",
            date: "15/03/2024"
        },
        {
            name: "Trần Thị B",
            role: "Sinh viên",
            image: "/image/avata2.jpg",
            rating: 5,
            content: "Dịch vụ giao hàng nhanh chóng, sách được đóng gói cẩn thận. Nội dung sách rất hay và bổ ích cho việc học tập của mình.",
            date: "10/03/2024"
        },
        {
            name: "Lê Văn C",
            role: "Giáo viên",
            image: "/image/avata2.jpg",
            rating: 5,
            content: "Tôi rất ấn tượng với chất lượng sách và dịch vụ của cửa hàng. Đây là nơi tôi thường xuyên mua sách cho học sinh của mình.",
            date: "05/03/2024"
        }
    ];

    const handleSubmitReview = (e) => {
        e.preventDefault();
        console.log({ review, rating });
        setReview("");
        setRating(0);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                        Đánh giá từ khách hàng
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Khách hàng nói gì về chúng tôi
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Những đánh giá chân thực từ những độc giả đã trải nghiệm dịch vụ của chúng tôi
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out"
                             style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                                        <div className="flex items-center mb-8">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                                            />
                                            <div className="ml-4">
                                                <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                                <p className="text-gray-600">{testimonial.role}</p>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-sm text-gray-500 mt-1">{testimonial.date}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            "{testimonial.content}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setActiveIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Review Form */}
                <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Chia sẻ trải nghiệm của bạn
                    </h3>
                    <form onSubmit={handleSubmitReview} className="max-w-2xl mx-auto">
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Đánh giá của bạn
                            </label>
                            <div className="flex items-center space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        className="focus:outline-none"
                                    >
                                        <svg
                                            className={`w-8 h-8 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <textarea
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                placeholder="Chia sẻ trải nghiệm của bạn..."
                                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                rows="4"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Gửi đánh giá
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
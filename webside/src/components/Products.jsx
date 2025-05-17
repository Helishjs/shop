import { useEffect, useState, useRef } from "react";

export const Products = ({books}) => {
    const [screen, setScreen] = useState([]);
    const [previous, setPrevious] = useState(12);
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });

                const halfWidth = scrollRef.current.scrollWidth / 2;
                if (scrollRef.current.scrollLeft >= halfWidth) {
                    setTimeout(() => {
                        scrollRef.current.scrollTo({ left: 0, behavior: "instant" });
                    }, 5000);
                }
            }
        }, 5000);

        return () => clearInterval(scrollInterval);
    }, []);

    useEffect(() => {
        const listBooks = books.slice(0, previous);
        setScreen(listBooks);
    }, [books, previous]);

    const handleShowMore = () => {
        setPrevious(pre => pre + 4);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                        Sản phẩm nổi bật
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Khám phá kho sách của chúng tôi
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Mỗi cuốn sách là một hành trình mới, mở ra những chân trời tri thức và cảm xúc mới mẻ
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {screen && screen.map((book, index) => (
                        <div key={index} 
                             className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img 
                                    src={book.imageUrl} 
                                    alt={book.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content Container */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {book.title}
                                </h3>
                                <p className="text-gray-600 font-medium mb-2">{book.name}</p>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{book.content}</p>
                                
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-600">4.5</span>
                                    </div>
                                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                        Mua ngay
                                        <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {screen.length < books.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleShowMore}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            Xem thêm sách
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

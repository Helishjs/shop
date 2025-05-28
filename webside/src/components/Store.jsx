import React, { useState } from 'react';
import { useStore } from '../store';

export const Store = () => {
    const { activeCategory, setActiveCategory } = useStore();
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'Tất cả', icon: '📚' },
        { id: 'new', name: 'Sách mới', icon: '🆕' },
        { id: 'bestseller', name: 'Bán chạy', icon: '🔥' },
        { id: 'sale', name: 'Khuyến mãi', icon: '🏷️' },
        { id: 'comic', name: 'Truyện tranh', icon: '🎨' },
        { id: 'education', name: 'Giáo dục', icon: '📖' }
    ];

    const books = [
        {
            id: 1,
            title: 'Đắc Nhân Tâm',
            author: 'Dale Carnegie',
            price: 89000,
            salePrice: 69000,
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            category: 'bestseller'
        },
        {
            id: 2,
            title: 'Nhà Giả Kim',
            author: 'Paulo Coelho',
            price: 79000,
            salePrice: 59000,
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            category: 'new'
        },
        // Thêm nhiều sách khác ở đây
    ];

    const filteredBooks = books.filter(book => {
        const matchesCategory = activeCategory === 'all' || book.category === activeCategory;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Search and Filter Section */}
            <div className="mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="w-full md:w-96">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sách..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-gray-900 text-sm font-medium shadow-sm transition-all duration-200"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-1.5 rounded-full hover:bg-indigo-600 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Sắp xếp:</span>
                        <select className="px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-sm font-medium">
                            <option value="newest">Mới nhất</option>
                            <option value="price-asc">Giá tăng dần</option>
                            <option value="price-desc">Giá giảm dần</option>
                            <option value="name">Tên A-Z</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                                activeCategory === category.id
                                    ? 'bg-indigo-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                            }`}
                        >
                            <span className="text-lg">{category.icon}</span>
                            <span className="font-medium">{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
                        <div className="relative">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-48 object-cover"
                            />
                            {book.salePrice && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    -{Math.round((1 - book.salePrice / book.price) * 100)}%
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    {book.salePrice ? (
                                        <>
                                            <span className="text-lg font-bold text-indigo-600">{book.salePrice.toLocaleString()}đ</span>
                                            <span className="ml-2 text-sm text-gray-500 line-through">{book.price.toLocaleString()}đ</span>
                                        </>
                                    ) : (
                                        <span className="text-lg font-bold text-indigo-600">{book.price.toLocaleString()}đ</span>
                                    )}
                                </div>
                                <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                    <button className="px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                        Trước
                    </button>
                    <button className="px-3 py-1 rounded-lg bg-indigo-600 text-white">
                        1
                    </button>
                    <button className="px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                        2
                    </button>
                    <button className="px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                        3
                    </button>
                    <button className="px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                        Sau
                    </button>
                </nav>
            </div>
        </div>
    );
}; 
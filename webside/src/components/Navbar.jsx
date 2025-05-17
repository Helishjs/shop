import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const userMenuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogin = () => {
        // Giả lập đăng nhập thành công
        setIsLoggedIn(true);
        setUserInfo({
            name: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
            email: 'john@example.com'
        });
        navigate('/profile'); // Chuyển hướng về trang profile
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserInfo(null);
        setIsUserMenuOpen(false);
        navigate('/'); // Chuyển về trang chủ sau khi đăng xuất
    };

    const categories = [
        { id: 'all', name: 'Tất cả' },
        { id: 'new', name: 'Sách mới' },
        { id: 'bestseller', name: 'Bán chạy' },
        { id: 'sale', name: 'Khuyến mãi' },
        { id: 'comic', name: 'Truyện tranh' },
        { id: 'education', name: 'Giáo dục' }
    ];

    return (
        <div className="relative">
            {/* Top Bar */}
            <div className="bg-white text-gray-800 py-2 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <span className="text-sm font-semibold">Miễn phí vận chuyển cho đơn hàng từ 500k</span>
                            <span className="hidden md:inline text-gray-400">|</span>
                            <span className="text-sm font-semibold">Hotline: 1900 1234</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            {!isLoggedIn ? (
                                <>
                                    <button onClick={handleLogin} className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200">Đăng nhập</button>
                                    <span className="hidden md:inline text-gray-400">|</span>
                                    <Link to="/register" className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200">Đăng ký</Link>
                                </>
                            ) : (
                                <div className="relative" ref={userMenuRef}>
                                    <button
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="flex items-center space-x-2 focus:outline-none"
                                    >
                                        <img
                                            src={userInfo?.avatar}
                                            alt="User Avatar"
                                            className="h-8 w-8 rounded-full border-2 border-gray-200 object-cover"
                                        />
                                        <span className="text-sm font-medium text-gray-700">{userInfo?.name}</span>
                                        <svg
                                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                                                isUserMenuOpen ? 'transform rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                                            <Link
                                                to="/profile"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                Thông tin của tôi
                                            </Link>
                                            <Link
                                                to="/orders"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                                Đơn hàng của tôi
                                            </Link>
                                            <Link
                                                to="/wishlist"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                Sách yêu thích
                                            </Link>
                                            <div className="border-t border-gray-100 my-1"></div>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Đăng xuất
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-white'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Logo and Search */}
                    <div className="flex items-center justify-between py-3">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="relative">
                                <img src="/image/logo.png" alt="Logo" className="h-10 w-10 transform group-hover:scale-105 transition-transform duration-200" />
                                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg">
                                    New
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                                    BookStore
                                </span>
                                <span className="text-xs font-medium text-gray-600">
                                    Khám phá tri thức
                                </span>
                            </div>
                        </Link>

                        {/* Search Bar */}
                        <div className="hidden md:flex flex-1 max-w-xl mx-6">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm sách, tác giả, thể loại..."
                                    className="w-full px-3 py-2 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-gray-900 text-sm font-medium shadow-sm transition-all duration-200"
                                />
                                <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-1.5 rounded-full hover:bg-indigo-600 transition-colors duration-200 shadow-md">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center space-x-4">
                            {!isLoggedIn ? (
                                <div className="flex items-center space-x-4">
                                    <button onClick={handleLogin} className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200">
                                        Đăng nhập
                                    </button>
                                    <Link to="/register" className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                                        Đăng ký
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <Link to="/wishlist" className="relative group text-gray-900">
                                        <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg">
                                            5
                                        </span>
                                    </Link>
                                    <Link to="/cart" className="relative group text-gray-900">
                                        <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg">
                                            3
                                        </span>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Category Navigation */}
                    <div className="hidden md:block border-t border-gray-200">
                        <div className="flex justify-center space-x-6 py-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`relative px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                                        activeCategory === category.id
                                            ? 'text-indigo-600'
                                            : 'text-gray-700 hover:text-indigo-600'
                                    }`}
                                >
                                    {category.name}
                                    {activeCategory === category.id && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left transition-transform duration-200"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Search (visible only on mobile) */}
            <div className="md:hidden bg-white p-3 shadow-md">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="w-full px-3 py-2 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-gray-900 text-sm font-medium shadow-sm transition-all duration-200"
                    />
                    <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-1.5 rounded-full hover:bg-indigo-600 transition-colors duration-200 shadow-md">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

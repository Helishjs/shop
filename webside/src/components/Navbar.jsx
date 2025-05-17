import {useEffect, useRef, useState} from "react";

export const Navbar = ({books}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [onSearch, setOnSearch] = useState("");
    const searchRef = useRef(null);
    const list = onSearch.trim() !== ""? books.filter((book) => {
        return book.name.toLowerCase().includes(onSearch.toLowerCase());
    }): [];
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setOnSearch(""); // Đóng form
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div>
            <div className="flex justify-between items-center py-3 px-6 bg-gradient-to-r from-cyan-200 to-blue-400 shadow-md ">
                {/* Logo */}
                <div>
                    <a href="#" className="flex items-center font-bold text-2xl ">
                        <div className=" bg-cyan-300 rounded-lg">
                            <img src="/image/logorm.png" alt="logo" className="h-15 w-15 bg-gradient-to-r from-cyan-200 "/>
                        </div>
                        IBOOK
                    </a>
                </div>

                {/* Thanh tìm kiếm */}
                <div ref={searchRef}
                    className="flex items-center bg-white px-4 py-2 rounded-full shadow-md w-2/5 focus-within:ring-2 focus-within:ring-gray-200">
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        className="border-none outline-none flex-grow bg-transparent text-gray-700" onChange={(e) => setOnSearch(e.target.value)}
                    />
                    <i className="fa-solid fa-search text-gray-500 text-xl"></i>
                </div>
                {/*listsearch*/}
                {onSearch.trim() !== "" && list.length > 0 && (
                    <div ref={searchRef} className="absolute left-1/2 top-20 transform -translate-x-1/2 z-10 bg-white text-black w-200 shadow-lg rounded-lg p-5 ml-4 max-h-121 overflow-y-auto ">
                        {list.map((book) => (
                            <div key={book.name} className="flex items-center gap-3 border-b border-gray-700 py-2 active:scale-95 transition-transform duration-200">
                                <img src={book.imageUrl} alt="photo" className="w-25 h-25 object-cover rounded" />
                                <div className="ml-4">
                                    <p className="font-semibold text-2xl mb-3">Tiêu đề: {book.title}</p>
                                    <p>Tên sách: {book.name}</p>
                                    <p className="text-gray-700 text-1/2 mt-1">Tác giả: {book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}




                {/* Giỏ hàng & Avatar */}
                <div className="flex items-center gap-x-6">
                    <i className="fa-solid fa-cart-shopping text-gray-500 text-2xl cursor-pointer active:text-black active:scale-90"></i>
                    {/* Avatar - Bấm để mở menu */}
                    <div className="relative">
                        <img
                            src="/image/avata2.jpg"
                            alt="avatar"
                            className="h-10 w-10 rounded-full object-cover cursor-pointer active:scale-95"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                        {/* Dropdown menu */}
                        {isOpen && (
                            <div
                                className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg flex flex-col p-2 z-10  ">
                                <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded"
                                   onClick={() => setIsOpen(!isOpen)}>Thông tin</a>
                                <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded"
                                   onClick={() => setIsOpen(!isOpen)}>Cài đặt</a>
                                <a href="/login" className="hover:bg-gray-200 px-4 py-2 rounded"
                                   onClick={() => setIsOpen(!isOpen)}>Đăng nhập</a>
                                <a href="/register" className="hover:bg-gray-200 px-4 py-2 rounded"
                                   onClick={() => setIsOpen(!isOpen)}>Đăng xuất</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/*thẻ navbar*/}
            <div className="shadow-md py-2 bg-white">
                <ul className="flex items-center justify-around">
                    <li className="hover:bg-gray-300 px-3 active:scale-90 transition-all cursor-pointer rounded-md">
                        Trang chủ
                    </li>
                    <li className="hover:bg-gray-300 px-3 active:scale-90 transition-all cursor-pointer rounded-md">
                        Sách khoa học
                    </li>
                    <li className="hover:bg-gray-300 px-3 active:scale-90 transition-all cursor-pointer rounded-md">
                        Truyện tranh
                    </li>
                    <li className="hover:bg-gray-300 px-3 active:scale-90 transition-all cursor-pointer rounded-md">
                        Sách ngôn tình
                    </li>
                    <li className="hover:bg-gray-300 px-3 active:scale-90 transition-all cursor-pointer rounded-md">
                        Sách nghiên cứu
                    </li>
                    <li className="hover:bg-gray-300 px-3 active:scale-90 transition-all cursor-pointer rounded-md">
                        Top phổ biến
                    </li>
                </ul>
            </div>

        </div>
    );
};

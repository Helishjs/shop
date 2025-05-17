import  { useEffect, useState, useRef } from "react";
import { getBooks } from "../service/ProductsService.jsx";

export const Products = ({books}) => {
    const [screen,setScreen] = useState([]);
    const [previous, setPrevious] = useState(12);
    const scrollRef = useRef(null);
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });

                // Khi cuộn đến giữa danh sách, reset về đầu
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
        const listBooks = books.slice(0,previous);
        setScreen(listBooks);
    },[books, previous]);

    const handleShowMore = () =>{
        setPrevious(pre => pre + 4);
    };

    return (
        <div className="mb-8 shadow-md">
            <div className="text-center mb-8">
                <p className=" text-cyan-500">Top những sản phẩm bán chạy dành cho bạn</p>
                <h2 className="font-bold text-4xl">Sản phẩm</h2>
                <p className="text-gray-500 mt-3">
                    Một cuốn sách không thể bỏ lỡ! Đắm chìm trong câu chuyện cuốn hút và thông điệp đầy ý nghĩa.
                </p>
            </div>

            {/* Danh sách sách cuộn ngang */}
            {/*<div ref={scrollRef} className="flex overflow-x-auto scrollbar-hiden space-x-6 py-4 w-full">*/}
            {/*    {books.map((book, index) => (*/}
            {/*        <div key={index}*/}
            {/*             className="min-w-[250px] max-w-[250px] bg-gradient-to-r from-cyan-200 to-blue-300 p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-500">*/}
            {/*            <a href="#" className="text-2xl font-semibold mb-4">{book.title}</a>*/}
            {/*            <a href="#">*/}
            {/*                <img src={book.imageUrl} alt={book.name}*/}
            {/*                     className="w-60 h-80 object-cover rounded-lg mb-3 transition-transform duration-200 active:scale-95"/>*/}
            {/*            </a>*/}
            {/*            <p className="text-gray-600 text-2xl text-center">{book.name}</p>*/}
            {/*            <p className="text-sm text-gray-500 m-auto">{book.content}</p>*/}
            {/*            <p className="text-sm font-medium text-gray-700">Tác giả: {book.author}</p>*/}
            {/*            <a href="#"*/}
            {/*               className="bg-white px-6 py-1 rounded mt-3 active:scale-95 hover:shadow-md cursor-pointer font-medium"*/}
            {/*               type="button">Mua</a>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="flex flex-wrap gap-4 justify-center">
                {screen && screen.map((book, index) => (
                    <div key={index}
                         className=" my-8 basis-1/3 md:basis-1/2 sm:basis-full max-w-[350px] p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-500">
                        <a href="#" className="text-2xl font-semibold mb-4">{book.title}</a>
                        <a href="#">
                            <img src={book.imageUrl} alt={book.name}
                                 className="w-70 h-90 object-cover rounded-lg mb-3 transition-transform duration-200 active:scale-95"/>
                        </a>
                        <p className="text-gray-600 text-2xl text-center">{book.name}</p>
                        <p className="text-sm text-gray-500 m-auto">{book.content}</p>
                        <p className="text-sm font-medium text-gray-700">Tác giả: {book.author}</p>
                        <a href="#"
                           className="bg-white px-6 py-1 rounded mt-3 active:scale-95 hover:shadow-md cursor-pointer font-medium"
                           type="button">Mua</a>
                    </div>
                ))}
            </div>
            {screen.length < books.length && <div className="flex justify-center m-4">
                <button
                    className="m-auto px-3 py-2 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-md mt-3 hover:scale-105 active:scale-95 font-medium my-6"
                    onClick={handleShowMore}>Hiển thị thêm
                </button>
            </div>}
        </div>
    );
};

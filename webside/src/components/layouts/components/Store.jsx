import {Navbar} from "../../Navbar.jsx";
import React from "react";
import {Footer} from "../../Footer.jsx";

const Store = ({books}) =>{
    return (
        <div>
            <Navbar/>
            <div className="w-[1200px] h-full mx-auto  mt-10">
                <div className="flex flex-col mb-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-semibold ml-4 mb-3">Sách khoa học</h2>
                        <img src="/image/banner1.png" alt="logo" className="h-2/3 w-full rounded-2xl " />
                    </div>
                        <div className="flex justify-center m-4 px-3 py-2 gap-x-4 items-center">
                            {books.slice(0,3).map((book, index) => (
                                <div key={index}
                                     className="flex w-[400px] h-[220px] px-3 py-2 gap-x-4 items-center bg-white shadow-md">
                                    <div>
                                        <a href="#">
                                            <img src={book.imageUrl} alt={book.name}
                                                 className="w-[300px] h-[200px] "/>
                                        </a>
                                    </div>
                                    <div className="h-max-[200px] w-max-[250px]">
                                        <p className="font-semibold text-xl mb-3">{book.name}</p>
                                        <p className="text-sm text-gray-500 m-auto">{book.content}</p>
                                        <p className="text-sm font-medium text-gray-700 mb-3">Tác giả: {book.author}</p>
                                        <a href="#"
                                           className="bg-gradient-to-r from-cyan-200 to-blue-400 px-3 py-2 rounded-md"
                                           type="button">Mua</a>
                                    </div>
                                    </div>

                            ))}
                        </div>
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-200 active:scale-95 transition-all duration-100 ml-10 ">Xem thêm</a>
                    </div>

                </div>
                <div className="flex flex-col mb-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-semibold ml-4 mb-3">Top phổ biến</h2>
                        <div className="flex justify-center items-center w-full h-[600px]">
                            <div className="flex-[3] h-full p-2">
                                <a href="#" className="block h-full">
                                    <img src="/image/banner2.png"
                                         className="w-full h-full  aspect-[3/2] rounded-lg shadow-lg"/>
                                </a>
                            </div>
                            <div className="flex-[1] flex flex-col h-full gap-2 p-2">
                                <a href="#" className="w-full flex-1">
                                    <img src="/image/banner3.png"
                                         className="w-full h-full object-cover aspect-[3/1] rounded-lg shadow-lg"/>
                                </a>
                                <a href="#" className="w-full flex-1">
                                    <img src="/image/banner1.png"
                                         className="w-full h-full aspect-[3/1] rounded-lg shadow-lg"/>
                                </a>
                            </div>
                        </div>



                    </div>
                    <div className="flex justify-center m-4 px-3 py-2 gap-x-4 items-center">
                        {books.slice(0,3).map((book, index) => (
                            <div key={index}
                                 className="flex w-[400px] h-[220px] px-3 py-2 gap-x-4 items-center bg-white shadow-md">
                                <div>
                                    <a href="#">
                                        <img src={book.imageUrl} alt={book.name}
                                             className="w-[300px] h-[200px] "/>
                                    </a>
                                </div>
                                <div className="h-max-[200px] w-max-[250px]">
                                    <p className="font-semibold text-xl mb-3">{book.name}</p>
                                    <p className="text-sm text-gray-500 m-auto">{book.content}</p>
                                    <p className="text-sm font-medium text-gray-700 mb-3">Tác giả: {book.author}</p>
                                    <a href="#"
                                       className="bg-gradient-to-r from-cyan-200 to-blue-400 px-3 py-2 rounded-md"
                                       type="button">Mua</a>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-200 active:scale-95 transition-all duration-100 ml-10 ">Xem thêm</a>
                    </div>

                </div>

                <div className="flex flex-col mb-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-semibold ml-4 mb-3">Sách ngôn tình</h2>
                        <img src="/image/banner1.png" alt="logo" className="h-2/3 w-full rounded-2xl " />
                    </div>
                    <div className="flex justify-center m-4 px-3 py-2 gap-x-4 items-center">
                        {books.slice(0,3).map((book, index) => (
                            <div key={index}
                                 className="flex w-[400px] h-[220px] px-3 py-2 gap-x-4 items-center bg-white shadow-md">
                                <div>
                                    <a href="#">
                                        <img src={book.imageUrl} alt={book.name}
                                             className="w-[300px] h-[200px] "/>
                                    </a>
                                </div>
                                <div className="h-max-[200px] w-max-[250px]">
                                    <p className="font-semibold text-xl mb-3">{book.name}</p>
                                    <p className="text-sm text-gray-500 m-auto">{book.content}</p>
                                    <p className="text-sm font-medium text-gray-700 mb-3">Tác giả: {book.author}</p>
                                    <a href="#"
                                       className="bg-gradient-to-r from-cyan-200 to-blue-400 px-3 py-2 rounded-md"
                                       type="button">Mua</a>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-200 active:scale-95 transition-all duration-100 ml-10 ">Xem thêm</a>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
export  default Store;
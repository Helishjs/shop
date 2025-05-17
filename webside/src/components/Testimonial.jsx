import React from "react";

export const Testimonial = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full m-auto">
            <div className="text-center">
                <p className="text-cyan-500">đánh giá của các bạn là một phần của chúng tôi</p>
                <h2 className="font-bold text-4xl">Đánh giá</h2>
                <p className="text-gray-500 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    volutpat justo sed purus</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-20">
                <div
                    className="flex flex-col justify-center items-center w-70 h-70 m-auto bg-gradient-to-r from-cyan-200 to-blue-300 p-9 rounded-md relative active:scale-95">
                    <div className="flex items-center top-3 left-3 absolute gap-x-4">
                        <img src="/image/avata2.jpg" alt="avatar" className="rounded-full w-1/7"/>
                        <p>Người dùng</p>
                        <p className="absolute text-7xl text-gray-400 right-10 top-4 font-bold">;;</p>
                    </div>
                    <div className="z-10">
                        <p>Những cuốn sách ở đây đều có chất lượng in ấn tốt, giấy đẹp, và nội dung cực kỳ hữu ích. Mình
                            rất
                            hài lòng khi mua sách tại đây!</p>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center w-70 h-70 m-auto bg-gradient-to-r from-cyan-200 to-blue-300 p-9 rounded-md relative active:scale-95">
                    <div className="flex items-center top-3 left-3 absolute gap-x-4">
                        <img src="/image/avata2.jpg" alt="avatar" className="rounded-full w-1/7"/>
                        <p>Người dùng</p>
                        <p className="absolute text-7xl text-gray-400 right-10 top-4 font-bold">;;</p>
                    </div>
                    <div className="z-10">
                        <p>Những cuốn sách ở đây đều có chất lượng in ấn tốt, giấy đẹp, và nội dung cực kỳ hữu ích. Mình
                            rất
                            hài lòng khi mua sách tại đây!</p>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center w-70 h-70 m-auto bg-gradient-to-r from-cyan-200 to-blue-300 p-9 rounded-md relative active:scale-95">
                    <div className="flex items-center top-3 left-3 absolute gap-x-4">
                        <img src="/image/avata2.jpg" alt="avatar" className="rounded-full w-1/7"/>
                        <p>Người dùng</p>
                        <p className="absolute text-7xl text-gray-400 right-10 top-4 font-bold">;;</p>
                    </div>
                    <div className="z-10">
                        <p>Những cuốn sách ở đây đều có chất lượng in ấn tốt, giấy đẹp, và nội dung cực kỳ hữu ích. Mình
                            rất
                            hài lòng khi mua sách tại đây!</p>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center w-70 h-70 m-auto bg-gradient-to-r from-cyan-200 to-blue-300 p-9 rounded-md relative active:scale-95">
                    <div className="flex items-center top-3 left-3 absolute gap-x-4">
                        <img src="/image/avata2.jpg" alt="avatar" className="rounded-full w-1/7"/>
                        <p>Người dùng</p>
                        <p className="absolute text-7xl text-gray-400 right-10 top-4 font-bold">;;</p>
                    </div>
                    <div className="z-10">
                        <p>Những cuốn sách ở đây đều có chất lượng in ấn tốt, giấy đẹp, và nội dung cực kỳ hữu ích. Mình
                            rất
                            hài lòng khi mua sách tại đây!</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 px-4 py-3 mt-20 w-full mb-8">
                <input
                    type="text"
                    placeholder="Nhập đánh giá....."
                    className="outline-none border border-gray-300 shadow-md px-4 py-2 w-200 rounded-md"
                />
                <button className="bg-cyan-300 text-white px-4 py-2 rounded-md active:scale-95">Gửi</button>
            </div>

        </div>
    )
}
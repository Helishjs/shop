const Test = () =>{
    return(
        <div className="flex flex-col p-9 shadow-xl max-w-4xl max-h-5xl rounded mx-auto my-30">
            <h1 className="text-3xl font-bold mb-10">Get in touch witch us by filling contact form  below</h1>
            <div  className="flex gap-1 m-1">
                <input type="text" placeholder="* Enter your full name"  className="border rounded-2xl p-4 flex-1"/>
                <input type="text" placeholder="* Enter your email address" className="border rounded-2xl p-4 flex-1"/>
            </div>
            <div className="m-1">
                <input type="text" placeholder="Enter your subject" className="border rounded-2xl p-4 w-full" />
            </div>
            <div className="m-1">
                <textarea type="text" placeholder="Your messenger here..." className="w-full border rounded-2xl p-4 h-7xl pb-40" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-300 ml-2 text-white px-10 py-3 rounded mt-3 active:scale-95 hover:shadow-md cursor-pointer font-medium">Send</button>
                <p className="text-gray-300 font-bold">* Please fill all required form field, thanks</p>
        </div>
        </div>
    )
}
export default Test;
import { useState } from "react";
import { register } from "../../../service/UserService.jsx";
import {redirect, useNavigate} from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        phone: ""
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await register(user);
        if (result?.error) {
            alert("Đăng ký thất bại: " + result.error);
        } else {
            alert("Đăng ký thành công!");
            navigate("/login");
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-r from-cyan-200 to-blue-400 items-center justify-center">
            <form
                className="w-1/4 bg-white shadow-lg rounded-lg p-6"
                onSubmit={handleSubmit}
            >
                <h1 className="text-center text-4xl font-semibold my-4">Đăng kí</h1>

                <div className="flex flex-col gap-3 p-2">
                    <label htmlFor="username" className="text-gray-500">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username"
                           className="border border-gray-300 px-4 py-2 w-full rounded-md"
                           onChange={(e) => setUser({...user, username: e.target.value})} />

                    <label htmlFor="email" className="text-gray-500">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"
                           className="border border-gray-300 px-4 py-2 w-full rounded-md"
                           onChange={(e) => setUser({...user, email: e.target.value})} />

                    <label htmlFor="password" className="text-gray-500">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"
                           className="border border-gray-300 px-4 py-2 w-full rounded-md"
                           onChange={(e) => setUser({...user, password: e.target.value})} />

                    <label htmlFor="phone" className="text-gray-500">Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="Phone"
                           className="border border-gray-300 px-4 py-2 w-full rounded-md"
                           onChange={(e) => setUser({...user, phone: e.target.value})} />
                </div>

                <div className="flex flex-col gap-3 p-2">
                    <button type="submit"
                            className="py-2 bg-gradient-to-r from-cyan-400 to-blue-500 w-full rounded-md text-white font-semibold active:scale-95 transition-all duration-200">
                        Đăng kí
                    </button>
                    <a href="/login" className="text-center text-blue-500 hover:underline">Đăng nhập</a>
                </div>
            </form>
        </div>
    );
};

export default Register;

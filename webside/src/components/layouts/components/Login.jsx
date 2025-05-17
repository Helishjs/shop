import {useState} from "react";
import {login} from "../../../service/UserService.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [user,setUser] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const [checker,setChecker] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(user);
        if(result.error){
            alert("tên đăng nhập hoặc mật khẩu sai");
            setChecker(true);
        }else{
            alert("đăng nhập thành công");
            localStorage.setItem("user", JSON.stringify({
                token: result.data.token,
                refreshToken: result.data.refreshtoken
            }));

            navigate("/");
        }
    }

    return (
        <div className="flex h-screen bg-gradient-to-r from-cyan-200 to-blue-400 items-center justify-center">
            <form onSubmit={handleSubmit} className="w-1/4 bg-white shadow-lg rounded-lg p-6">
                <div>
                    <h1 className="text-center text-4xl font-semibold my-4">Đăng nhập</h1>

                    <div className="flex flex-col gap-3 p-2">
                        <label htmlFor="email" className="text-gray-500">Username</label>
                        <input type="text" id="username" name="username" placeholder="Username"
                               className="border border-gray-300 px-4 py-2 w-full rounded-md" onChange={(e)=>setUser({...user, username: e.target.value})} />

                        <label htmlFor="password" className="text-gray-500">Mật khẩu</label>
                        <input type="password" id="password" name="password" placeholder="Password"
                               className="border border-gray-300 px-4 py-2 w-full rounded-md" onChange={(e)=>setUser({...user, password: e.target.value})} />
                        {checker && <p className="text-center text-red-800 ">Tên đăng nhập hoặc mật khẩu sai</p>}
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember" className="text-gray-500">Nhớ mật khẩu</label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 p-2">
                        <button type="submit"
                                className="py-2 bg-gradient-to-r from-cyan-400 to-blue-500 w-full rounded-md text-white font-semibold active:scale-95 transition-all duration-200">
                            Đăng nhập
                        </button>
                        <a href="/register" className="text-center text-blue-500 hover:underline">Đăng ký</a>
                        <a href="#" className="text-center text-red-500 hover:underline">Quên mật khẩu?</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;

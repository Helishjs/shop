import axios from "axios";

export const register = async (user) =>{
    try{
        const response = await axios.post("http://localhost:3000/user",user);
        console.log("đăng kí thành công user");
        return response.data;
    }catch(error){
        console.log("Có lỗi khi tạo user",error);
    }

}

export const login = async (user) =>{
    try{
        const response = await axios.post("http://localhost:3000/auth/login",user);
        console.log("Đăng nhập thành công");
        return response.data;
    }catch(error){
        console.log(error);
    }
}
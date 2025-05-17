import axios from "axios";

export const getBooks = async () => {
    try {
        const response = await axios.get("http://localhost:3000/book");
        return response.data;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return [];
    }
};

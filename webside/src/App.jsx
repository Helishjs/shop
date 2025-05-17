import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./components/layouts/components/Home.jsx";
import Login from "./components/layouts/components/Login.jsx";
import Register from "./components/layouts/components/Register.jsx";
import {useEffect, useState} from "react";
import {getBooks} from "./service/ProductsService.jsx";
import Store from "./components/layouts/components/Store.jsx";
import Book from "./components/Globalcomponents/Book.jsx";
import Test from './components/componentstest/test1.jsx';
import  { Test2 } from './components/componentstest/test2.jsx';
import Test3 from './components/componentstest/test3.jsx';

function App() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getBooks();
            setBooks([...data.data]);
        };
        fetchBooks();
    }, []);
  return (
    <Routes>
      <Route path="/" element={<Home books={books}/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/book" element={<Book/>}></Route>
      <Route path="/store" element={<Store books={books}/>}></Route>
      {/* <Route path="/2" element={<Test2/>}></Route>
      <Route path="/1" element={<Test/>}></Route>
      <Route path="/3" element={<Test3/>}></Route> */}
    </Routes>
  )
}

export default App

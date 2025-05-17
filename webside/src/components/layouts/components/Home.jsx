import {Navbar} from "../../Navbar.jsx";
import {Hero} from "../../Hero.jsx";
import {Products} from "../../Products.jsx";
import {Banner} from "../../Banner.jsx";
import {Testimonial} from "../../Testimonial.jsx";
import {Footer} from "../../Footer.jsx";
import ChatButton from "../ChatAi.jsx";

const Home = ({books}) =>{
    return (
        <div>
            <Navbar books={books} />
            <Hero/>
            <Products books={books} />
            <Banner/>
            <Testimonial/>
            <Footer/>
            <ChatButton/>
        </div>
    )
}
export default Home;
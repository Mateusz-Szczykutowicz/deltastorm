import { Link } from "react-router-dom";
import style from "../styles/Home.module.scss";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Header />
                <div className={style.bookmark_wrapper}>
                    <div className={style.bookmark}>
                        <Link
                            to={{
                                pathname: "/work",
                                state: { prevPath: "/" },
                            }}
                        >
                            How we work
                        </Link>
                    </div>
                    <div className={style.bookmark}>
                        <Link to="/portfolio">Portfolio</Link>
                    </div>
                    <div className={style.bookmark}>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className={style.bookmark}>
                        <Link to="/price">Price</Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;

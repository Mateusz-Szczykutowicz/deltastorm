import { Link } from "react-router-dom";
import style from "../styles/Portfolio.module.scss";
import Header from "./Header";

const Portfolio = () => {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.portfolio_wrapper}>
                <Link to="/portfolio/1">
                    <div className={style.portfolio}></div>
                </Link>
                <Link to="/portfolio/2">
                    <div className={style.portfolio}></div>
                </Link>
                <Link to="/portfolio/3">
                    <div className={style.portfolio}></div>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;

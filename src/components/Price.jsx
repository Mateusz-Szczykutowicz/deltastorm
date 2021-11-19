import { Link } from "react-router-dom";
import style from "../styles/Price.module.scss";
import Header from "./Header";
import Footer from "./Footer";

const Price = () => {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.prices}>
                <Link to="/price/pack1">
                    <p>Pakiet 1</p>
                </Link>
                <Link to="/price/pack2">
                    <p>Pakiet 2</p>
                </Link>
                <Link to="/price/pack3">
                    <p>Pakiet 3</p>
                </Link>
                <Link to="/price/pack4">
                    <p>Pakiet 4</p>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Price;

import style from "../styles/Pack.module.scss";
import Header from "./Header";

const Pack = (params) => {
    const { header, content, price } = params;
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.header}>{header}</div>
            <div className={style.content}>{content}</div>
            <div className={style.price}>{price}</div>
        </div>
    );
};

export default Pack;

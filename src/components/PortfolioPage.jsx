import style from "../styles/PortfolioPage.module.scss";
import Header from "./Header";

const Portfolio = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Header />
                <div className={style.content_wrapper}>
                    <div className={style.header}></div>
                    <div className={style.content}>
                        <div className={style.points_wrapper}>
                            <div className={style.point}></div>
                            <div className={style.point}></div>
                            <div className={style.point}></div>
                            <div className={style.point}></div>
                        </div>
                        <button></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;

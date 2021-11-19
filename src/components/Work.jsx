import { Link } from "react-router-dom";
import style from "../styles/Work.module.scss";
import Header from "./Header";

const Work = (params) => {
    return (
        <>
            <div className={style.wrapper}>
                <Header />
                <div className={style.bookmark_wrapper}>
                    <Link
                        to={{
                            pathname: "/work/creative",
                            prevPath: "/work",
                        }}
                    >
                        <div className={style.bookmark}>1. Etap kreatywny</div>
                    </Link>

                    <Link
                        to={{
                            pathname: "/work/time",
                            state: { prevPath: "/work" },
                        }}
                    >
                        <div className={style.bookmark}>2. Etap Czasowy</div>
                    </Link>

                    <Link
                        to={{
                            pathname: "/work/production",
                            state: { prevPath: "/work" },
                        }}
                    >
                        <div className={style.bookmark}>
                            3. Etap produkcyjny
                        </div>
                    </Link>

                    <Link
                        to={{
                            pathname: "/work/correct",
                            state: { prevPath: "/work" },
                        }}
                    >
                        <div className={style.bookmark}>4. Etap poprawek</div>
                    </Link>
                    <Link
                        to={{
                            pathname: "/work/end",
                            state: { prevPath: "/work" },
                        }}
                    >
                        <div className={style.bookmark}>5. Etap końcowy</div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Work;

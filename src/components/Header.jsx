import style from "../styles/Header.module.scss";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faReply } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (params) => {
    let location = useLocation();
    const prevLocation = params.prevLocation || "/";

    return (
        <header className={style.header}>
            <h1>Delta Storm</h1>
            <nav>
                <Link to="/">
                    {location.pathname === "/" ? null : (
                        <FontAwesomeIcon
                            icon={faHome}
                            className={style.homebutton}
                        />
                    )}
                </Link>
                <Link to={prevLocation ? prevLocation : "/"}>
                    {location.pathname === "/" ? null : (
                        <FontAwesomeIcon
                            icon={faReply}
                            className={style.homebutton}
                        />
                    )}
                </Link>
            </nav>
        </header>
    );
};

export default Header;

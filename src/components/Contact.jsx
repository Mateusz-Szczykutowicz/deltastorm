import { Link } from "react-router-dom";
import style from "../styles/Contact.module.scss";
import Header from "./Header";

const Contact = () => {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.content}>
                <p>Delta Storm</p>
                <p>Trębowiec Mały 9,</p>
                <p>27-220 Mirzec</p>
                <p>tel. 572 - 868 - 190</p>
                <p>kontakt@deltastorm.pl</p>
                <p>Pon. - Pt. w godz. 9:00 - 17:00</p>
            </div>
            <div className={style.buttons}>
                <a href="tel:+48672868190">tel</a>
                <Link to="/contact/send">send</Link>
            </div>
        </div>
    );
};

export default Contact;

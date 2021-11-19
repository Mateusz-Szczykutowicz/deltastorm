import style from "../styles/Footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>Trębowiec Mały 9,</p>
            <p>27-220 Mirzec</p>
            <p>tel. 572 - 868 - 190</p>
            <p>kontakt@deltastorm.pl</p>
            <p>Pon. - Pt. 9:00 - 17:00</p>
        </footer>
    );
};

export default Footer;

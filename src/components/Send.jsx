import style from "../styles/Send.module.scss";
import Header from "./Header";

const Send = () => {
    return (
        <div className={style.wrapper}>
            <Header />
            <form action="" method="get" className={style.contact_form}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email..."
                />
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telefon..."
                />
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    className={style.message}
                    placeholder="Wiadomość..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Send;

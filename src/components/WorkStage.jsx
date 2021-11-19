import Header from "./Header";
import style from "../styles/WorkStage.module.scss";

const WorkStage = (params) => {
    const { title, content } = params;
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.title}>
                <h2>{title}</h2>
            </div>
            <div className={style.content}>{content}</div>
        </div>
    );
};

export default WorkStage;

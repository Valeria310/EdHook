import { Btn } from "./../../Components/Button/Btn";
import c from "./WelcomePage.module.css";

export const WelcomePage = () => {
    const handleClick = () => {
        window.location.hash = "/roles";
    };
    return (
        <div className={c.wrapper}>
            <div className={c.text_block}>
                <h1>Activelife</h1>
                <h2>Все под контролем в одном месте</h2>
                <p className={c.text}>
                    Больше не надо вести коммуникацию в различных мессенджерах,
                    пользоваться сторонними программами и переживать о потере
                    важных уведомлений
                </p>
            </div>
            <div className={c.buttons_wrapper}>
                <Btn classname="white-button" text="Войти" />
                <Btn
                    classname="pink-button"
                    text="Зарегистрироваться"
                    onclick={handleClick}
                />
            </div>
        </div>
    );
};

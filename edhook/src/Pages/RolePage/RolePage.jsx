import c from "./RolePage.module.css";
import coach from "../../assets/images/coach.png";
import student from "../../assets/images/student.png";

export const RolePage = () => {
    const handleClick = () => {
        window.location.hash = "/registration";
    };
    return (
        <div className={c.wrapper}>
            <div className={c.text_wrapper}>
                <h1>Activelife</h1>
                <h2>Выберите свою роль для региcтрации</h2>
            </div>
            <div className={c.roles_wrapper}>
                <div className={c.coach} onClick={handleClick}>
                    <img src={coach} alt="Обучающий" />
                    <p>Обучающий</p>
                </div>
                <div className={c.student} onClick={handleClick}>
                    <img src={student} alt="Учащийся" />
                    <p>Учащийся</p>
                </div>
            </div>
        </div>
    );
};

import Form from "react-bootstrap/Form";
import c from "./Registration.module.css";
import { Btn } from "../../Components/Button/Btn";

export const Registration = () => {
    const handleClick = () => {
        window.location.hash = "/profile";
    };
    return (
        <div>
            <Form>
                <Form.Group className="mb-4" controlId="formBasicName">
                    <Form.Control
                        className="form_control"
                        type="text"
                        placeholder="Имя"
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPhone">
                    <Form.Control
                        className="form_control"
                        type="text"
                        placeholder="Телефон"
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control
                        className="form_control"
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPasswordRepit">
                    <Form.Control
                        className="form_control"
                        type="password"
                        placeholder="Повторите пароль"
                    />
                </Form.Group>

                <Form.Group
                    className="form_checkbox"
                    controlId="formBasicCheckbox"
                >
                    <Form.Check type="checkbox" label="Запомнить меня" />
                </Form.Group>

                <div className={c.separator}>
                    <span>или</span>
                </div>

                <div className={c.socials_wrapper}>
                    <ul className={c.socials_list}>
                        <li className={`${c.socials_item} ${c.fb}`}></li>
                        <li className={`${c.socials_item} ${c.google}`}></li>
                        <li className={`${c.socials_item} ${c.apple}`}></li>
                        <li className={`${c.socials_item} ${c.inst}`}></li>
                    </ul>
                </div>

                <Btn
                    classname="pink-button"
                    text="Зарегистрироваться"
                    onclick={handleClick}
                />
            </Form>
        </div>
    );
};

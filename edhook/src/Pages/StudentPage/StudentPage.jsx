import { Avatar } from "../../Components/Avatar/Avatar";
import { Chat } from "../../Components/Chat/Chat";
import { Notification } from "../../Components/Notification/Notification";
import { Schedule } from "../../Components/Schedule/Schedule";
import style from "./StudentPage.module.css";

export const StudentPage = () => {
    const handleClick = () => {
        window.location.hash = "/student";
    };
    return (
        <div>
            <div className={style.group_info}>
                <Avatar src={require("../../assets/images/IMG_2396.JPG")} classname="group" />
                <div className={style.info}>
                    <p className={style.name}>Иванова Анна</p>
                    <ul className={style.details}>
                        <li className={style.specialization}>Группа 1</li>
                        <li className={style.specialization}>Валентина Машкова </li>
                    </ul>
                </div>
            </div>
            <ul className={style.contacts_list}>
                <li className={style.contact_item}>
                    <p>+375296532869</p>
                    <div className={style.btns}>
                        <button type="button" className={`${style.contact_btn} ${style.sms_btn}`}></button>
                        <button type="button" className={`${style.contact_btn} ${style.call_btn}`}></button>
                    </div>
                </li>
                <li className={style.contact_item}>
                    <p>annaiv@gmail.com</p>
                    <div className={style.btns}>
                        <button type="button" className={`${style.contact_btn} ${style.mail_btn}`}></button>
                    </div>
                </li>
            </ul>
            <Notification dest={"Группа 1"} sender={"Валентина Машкова"} />
            <div className={style.spread}></div>
            <Schedule></Schedule>
            <Chat></Chat>
        </div>
    );
};

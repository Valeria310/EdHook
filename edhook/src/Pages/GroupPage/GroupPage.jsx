import { Avatar } from "../../Components/Avatar/Avatar";
import { NewNotification } from "../../Components/NewNotification/NewNotification";
import { Notification } from "../../Components/Notification/Notification";
import { ParticipantItem } from "../../Components/ParticipantItem/ParticipantItem";
import style from "./GroupPage.module.css";

export const GroupPage = () => {
    return (
        <div>
            <div className={style.group_info}>
                <Avatar src={require("../../assets/groupAvatar.png")} classname="group" />
                <div className={style.info}>
                    <p className={style.name}>0001</p>
                    <ul className={style.details}>
                        <li className={style.specialization}>Специализация</li>
                    </ul>
                </div>
            </div>
            <Notification dest={"Группа 1"} sender={"Валентина Машкова"} />
            <NewNotification />
            <div className={style.participants_list}>
                <button className={style.add_user}>
                    <span className={style.add_btn_icon}></span>
                </button>
                <ul className={style.user_list}>
                    <ParticipantItem number={1} name={"Анна"}></ParticipantItem>
                    <ParticipantItem name={"Дарья"}></ParticipantItem>
                    <ParticipantItem number={4} name={"Иван"}></ParticipantItem>
                    <ParticipantItem name={"Анна"}></ParticipantItem>
                    <ParticipantItem number={2} name={"Анна"}></ParticipantItem>
                </ul>
            </div>
            {/* calendar */}
        </div>
    );
};

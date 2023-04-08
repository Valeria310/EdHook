import { Avatar } from "../../Components/Avatar/Avatar";
import { Chat } from "../../Components/Chat/Chat";
import { NewNotification } from "../../Components/NewNotification/NewNotification";
import { Notification } from "../../Components/Notification/Notification";
import { ParticipantItem } from "../../Components/ParticipantItem/ParticipantItem";
import { Schedule } from "../../Components/Schedule/Schedule";
import style from "./GroupPage.module.css";

export const GroupPage = () => {
    const handleClick = () => {
        window.location.hash = "/student";
    };
    return (
        <div>
            <div className={style.group_info}>
                <Avatar src={require("../../assets/groupAvatar.png")} classname="group" />
                <div className={style.info}>
                    <p className={style.name}>Группа 1</p>
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
                    <ParticipantItem
                        number={1}
                        name={"Анна"}
                        avatar={require("../../assets/images/IMG_2396.JPG")}
                        onclick={handleClick}
                    ></ParticipantItem>
                    <ParticipantItem
                        name={"Дарья"}
                        avatar={require("../../assets/images/IMG_1920.JPG")}
                    ></ParticipantItem>
                    <ParticipantItem
                        number={4}
                        name={"Иван"}
                        avatar={require("../../assets/images/IMG_0589.JPG")}
                    ></ParticipantItem>
                    <ParticipantItem
                        name={"Анна"}
                        avatar={require("../../assets/images/IMG_2353.JPG")}
                    ></ParticipantItem>
                    <ParticipantItem
                        number={2}
                        name={"Анна"}
                        avatar={require("../../assets/images/IMG_2396.JPG")}
                    ></ParticipantItem>
                </ul>
            </div>
            <Schedule></Schedule>
            <Chat></Chat>
        </div>
    );
};

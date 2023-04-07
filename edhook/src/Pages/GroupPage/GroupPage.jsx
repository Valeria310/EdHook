import { Avatar } from "../../Components/Avatar/Avatar";
import { NewNotification } from "../../Components/NewNotification/NewNotification";
import { Notification } from "../../Components/Notification/Notification";
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
    </div>
  );
  //create notification
  //list psrtisipants
  //calendar
  //chat
};

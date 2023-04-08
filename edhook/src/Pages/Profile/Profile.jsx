import { CircleBtn } from "../../Components/CircleBtn/CircleBtn";
import { Avatar } from "./../../Components/Avatar/Avatar";
import { GroupItem } from "./../../Components/GroupItem/GroupItem";
import c from "./Profile.module.css";
import { NotificationNumber } from "./../../Components/NotificationNumber/NotificationNumber";
import { CoachNotidication } from "./../../Components/CoachNotification/CoachNotification";
import { Note } from "./../../Components/Note/Note";
import { MyCalendar } from "../../Components/MyCalendar/MyCalendar";

export const Profile = () => {
    const handleClick = () => {
        window.location.hash = "/group";
    };
    return (
        <div>
            <div id="main_info" className={c.main_info}>
                <Avatar
                    src={require("../../assets/images/IMG_2396.JPG")}
                    classname="coach"
                />
                <div className={c.info}>
                    <p className={c.name}>Валентина Машкова</p>
                    <ul className={c.details}>
                        <li className={c.specialization}>
                            Репетитор английского языка
                        </li>
                    </ul>
                </div>
            </div>
            <ul className={c.group_list}>
                <GroupItem
                    onclick={handleClick}
                    groupName="Гуппа 1"
                    schedule={["Пн", "Ср"]}
                    number="3"
                    color="#FF4F5A"
                />
                <GroupItem
                    groupName="Гуппа 2"
                    schedule={["Вт", "Ср"]}
                    color="#A12C34"
                />
                <GroupItem
                    groupName="Гуппа 3"
                    schedule={["Пт", "Сб"]}
                    color="#FF994F"
                />
            </ul>
            <CircleBtn className={c.add_btn} />
            <div className={c.debts}>
                <div className={c.debts_notif}>
                    <NotificationNumber number="1" />
                </div>
                <h3 className={c.debts_title}>Задолженность оплат</h3>
                <ul className={c.debts_list}>
                    <li className={c.debts_item}></li>
                    <li className={c.debts_item}></li>
                    <li className={c.debts_item}></li>
                    <li className={c.debts_item}></li>
                    <li className={c.debts_item}></li>
                </ul>
            </div>
            <div className={c.notification}>
                <div className={c.notification_date_wrapper}>
                    <div className={c.date}>
                        <p className={c.day}>25</p>
                        <p className={c.month}>Марта</p>
                    </div>
                    <CircleBtn />
                </div>
                <ul className={c.notification_list}>
                    <CoachNotidication
                        indicator="red"
                        title="Скачать доки"
                        text="Весь день"
                    />
                    <CoachNotidication
                        indicator="red"
                        title="Заказ е-доставка"
                        text="Весь день"
                    />
                    <CoachNotidication
                        indicator="white"
                        title="Группа 3"
                        text="09:00"
                    />
                </ul>
            </div>
            <MyCalendar />
            <div className={c.notes}>
                <div className={c.notes_info}>
                    <h3 className={c.notes_title}>Заметки</h3>
                    <div className={c.new_note}></div>
                </div>
                <ul className={c.notes_list}>
                    <Note isNew={true} />
                    <Note
                        title="Выслать тест"
                        text="В группу №3 закинуть тест по глаголам и выставить дату его проверки "
                    />
                </ul>
            </div>
        </div>
    );
};

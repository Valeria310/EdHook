import "./Notification.css";

export const Notification = (props) => {
    return (
        <div className="notification">
            <div className="notification_info">
                <div className="notif_icon"></div>
                <p className="dest">{props.dest}</p>
                <p className="sender">{props.sender}</p>
            </div>
            <div className="notification_main">
                <p className="notification_topic">Изменение в расписании</p>
                <p className="notification_message">
                    Перенесено занятие по английскому языку с 26.03.2023 12:00 на 04.04.2023 в 12:00
                </p>
            </div>
        </div>
    );
};

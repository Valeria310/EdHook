import "./Notification.css";

export const Notification = (props) => {
  return (
    <div className="notification">
      <div className="notification_info">
        <img src="#" alt="bell icon" className="notif_icon" />
        <p className="dest">{props.dest}</p>
        <p className="sender">{props.sender}</p>
      </div>
      <div className="notification_main">
        <p className="notification_topic">Изменения в расписании</p>
        <p className="notification_message">
          Перенесено занятие по английскому языку с 26.03.2023 12:00 на 04.04.2023 в 12:00
        </p>
      </div>
      {/* <form className="create_message" action="#" method="post">
        <button className="add_btn" type="button"></button>
        <input className="new_notif_text" type="text" name="text" id="" placeholder="Создать новое уведомление" />
      </form> */}
    </div>
  );
};

import "./NewNotification.css";

export const NewNotification = () => {
    return (
        <form className="create_message" action="#" method="post">
            <button className="add_btn" type="button"></button>
            <input className="new_notif_text" type="text" name="text" id="" placeholder="Создать новое уведомление" />
        </form>
    );
};

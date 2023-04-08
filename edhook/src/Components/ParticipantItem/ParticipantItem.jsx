import { Avatar } from "../Avatar/Avatar";
import { NotificationNumber } from "../NotificationNumber/NotificationNumber";
import "./ParticipantItem.css";

export const ParticipantItem = (props) => {
    let badge;
    if (props.number) {
        badge = <NotificationNumber number={props.number} />;
    }
    return (
        <li className="user_item">
            <div className="badge_container">{badge}</div>
            <Avatar classname={"participant"} src={props.avatar}></Avatar>
            <p className="user_name">{props.name}</p>
        </li>
    );
};

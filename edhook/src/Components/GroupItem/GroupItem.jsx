import { Avatar } from "./../Avatar/Avatar";
import { NotificationNumber } from "./../NotificationNumber/NotificationNumber";
import c from "./GroupItem.module.css";

export const GroupItem = (props) => {
    let badge;
    if (props.number) {
        badge = <NotificationNumber number={props.number} />;
    }
    return (
        <li className={c.item} onClick={props.onclick}>
            <div className={c.item_content}>
                <Avatar color={props.color} classname="group_img" />
                <h3 className={c.group_name}>{props.groupName}</h3>
                <ul className={c.group_list}>
                    <li>{props.schedule[0]}</li>
                    <li>{props.schedule[1]}</li>
                </ul>
            </div>
            {badge}
        </li>
    );
};

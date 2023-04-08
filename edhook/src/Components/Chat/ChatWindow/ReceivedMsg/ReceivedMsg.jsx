import { Avatar } from "../../../Avatar/Avatar";
import style from "./ReceivedMsg.module.css";

export const ReceivedMsg = (props) => {
    const msgList = Array();
    for (let i = 0; i < props.messages.length; i++) {
        msgList[i] = (
            <li key={i} className={style.msg_item}>
                {props.messages[i]}
            </li>
        );
    }
    return (
        <div className={style.msg}>
            <Avatar classname={"chat"} src={props.avatar}></Avatar>
            <div className={style.msg_block}>
                <p className={style.msg_sender}>{props.sender}</p>
                <ul className={style.msg_list}>{msgList}</ul>
            </div>
        </div>
    );
};

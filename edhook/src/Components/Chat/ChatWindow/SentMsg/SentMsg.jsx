import { Avatar } from "../../../Avatar/Avatar";
import style from "./SentMsg.module.css";

export const SentMsg = (props) => {
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
            <div className={style.msg_block}>
                <ul className={style.msg_list}>{msgList}</ul>
            </div>
            <Avatar classname={"chat"} src={props.avatar}></Avatar>
        </div>
    );
};

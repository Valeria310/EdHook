import c from "./CoachNotification.module.css";

export const CoachNotidication = (props) => (
    <li className={c.notification_wrapper}>
        <div className={`${c.indicator} ${props.indicator}`}></div>
        <div className={c.info}>
            <p className={c.title}>{props.title}</p>
            <p className={c.text}>{props.text}</p>
        </div>
    </li>
);

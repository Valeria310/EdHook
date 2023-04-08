import c from "./Note.module.css";
import { CircleBtn } from "./../CircleBtn/CircleBtn";

export const Note = (props) => {
    let btn;
    let text;
    let bookmark;
    let title;
    if (props.isNew) {
        btn = <CircleBtn />;
        text = "";
        bookmark = <div className={c.bookmark_new}></div>;
        title = <h4 className={c.title_new}>{props.title || "Тема"}</h4>;
    } else {
        text = props.text;
        bookmark = <div className={c.bookmark}></div>;
        title = <h4 className={c.title}>{props.title || "Тема"}</h4>;
    }
    return (
        <li className={c.note}>
            <div className={c.note_title}>
                {title}
                {bookmark}
            </div>
            <textarea
                rows="4"
                className={c.textarea}
                disabled={props.disabled === true}
                placeholder="Текст"
            >
                {text}
            </textarea>
            <div className={c.icons_wrapper}>
                <div className={c.icons_left}>
                    {btn}
                    <div className={c.paperclip}></div>
                    <div className={c.link}></div>
                </div>
                <div className={c.microphone}></div>
            </div>
        </li>
    );
};

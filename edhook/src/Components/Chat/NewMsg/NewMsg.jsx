import "./NewMsg.css";

export const NewMsg = (props) => {
    return (
        <div className="new-message">
            <button type="button" className="attach-btn"></button>
            <input type="text" className="new-msg-input" placeholder="Написать сообщение" />
            <button type="button" className="smile-btn"></button>
            <button type="button" className="voice-btn"></button>
        </div>
    );
};

import "./PinnedMessage.css";

export const PinnedMessage = (props) => {
    return (
        <div className="pinned-message">
            <p className="message-text">{props.text}</p>
            <div className="pin-icon"></div>
        </div>
    );
};

import "./Chat.css";
import { ChatWindow } from "./ChatWindow/ChatWindow";
import { NewMsg } from "./NewMsg/NewMsg";
import { PinnedMessage } from "./PinnedMessage/PinnedMessage";

export const Chat = (props) => {
    return (
        <div className="chat-section">
            <PinnedMessage text={"Пройти тест по глаголам к следующему занятию"}></PinnedMessage>
            <ChatWindow></ChatWindow>
            <NewMsg></NewMsg>
        </div>
    );
};

import "./ChatWindow.css";
import { ReceivedMsg } from "./ReceivedMsg/ReceivedMsg";
import { SentMsg } from "./SentMsg/SentMsg";

export const ChatWindow = (props) => {
    return (
        <div className="chat-window">
            <ReceivedMsg sender={"Sender"} messages={["msg1", "text"]}></ReceivedMsg>
            <ReceivedMsg
                sender={"Sender"}
                messages={["text1", "sdfgfdghfgdhjfghjhjmhhjmhjkbjmhjmbjkhjmbnmhjk"]}
            ></ReceivedMsg>
            <SentMsg sender={"Me"} messages={["text1", "sdfgfdghfgdhjfghjhjmhhjmhjkbjmhjmbjkhjmbnmhjk"]}></SentMsg>
        </div>
    );
};

import "./ChatWindow.css";
import { ReceivedMsg } from "./ReceivedMsg/ReceivedMsg";
import { SentMsg } from "./SentMsg/SentMsg";

export const ChatWindow = (props) => {
    return (
        <div className="chat-window">
            <ReceivedMsg
                sender={"Анна Иванова"}
                messages={["msg1", "text"]}
                avatar={require("../../../assets/images/IMG_1920.JPG")}
            ></ReceivedMsg>
            <ReceivedMsg
                sender={"Иван Иванов"}
                messages={["text1", "sdfgfdghfgdhjfghjhjmhhjmhjkbjmhjmbjkhjmbnmhjk"]}
                avatar={require("../../../assets/images/IMG_0589.JPG")}
            ></ReceivedMsg>
            <SentMsg
                sender={"Me"}
                messages={["text1", "sdfgfdghfgdhjfghjhjmhhjmhjkbjmhjmbjkhjmbnmhjk"]}
                avatar={require("../../../assets/images/IMG_2396.JPG")}
            ></SentMsg>
        </div>
    );
};

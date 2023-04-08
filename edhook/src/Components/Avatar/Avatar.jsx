import "./Avatar.css";

export const Avatar = (props) => {
    let img;
    if (props.src) {
        img = <img className="avatar-img" src={props.src} alt="avatar" />;
    }

    return (
        <div
            className={`avatar ${props.classname}`}
            style={{ backgroundColor: props.color }}
        >
            {img}
        </div>
    );
};

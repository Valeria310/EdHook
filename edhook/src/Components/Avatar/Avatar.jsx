import "./Avatar.css";

export const Avatar = (props) => {
  return (
    <div className={`avatar ${props.classname}`}>
      <img className="avatar-img" src={props.src} alt="avatar" />
    </div>
  );
};

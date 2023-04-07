import Button from "react-bootstrap/Button";

export const Btn = (props) => {
    return (
        <Button
            className={`d-flex ${props.classname}`}
            variant="primary"
            type="button"
        >
            {props.text}
        </Button>
    );
};

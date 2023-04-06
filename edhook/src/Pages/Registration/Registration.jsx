import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Registration = () => (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                    className="form_control"
                    type="text"
                    placeholder="Имя"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control
                    className="form_control"
                    type="text"
                    placeholder="Телефон"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    className="form_control"
                    type="password"
                    placeholder="Пароль"
                />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPasswordRepit">
                <Form.Control
                    className="form_control"
                    type="password"
                    placeholder="Повторите пароль"
                />
            </Form.Group>

            <Form.Group className="form_checkbox" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>

            <Button
                className="d-flex m-auto"
                variant="primary"
                type="submit"
                style={{ width: "50%", justifyContent: "center" }}
            >
                Submit
            </Button>
        </Form>
    </div>
);

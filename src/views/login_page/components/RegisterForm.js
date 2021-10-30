import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const RegisterForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const toggleRegistrationFlag = props.toggleRegistrationFlag;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    // TODO: Make the stay signed in checkbox work
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password2} onChange={e => setPassword2(e.target.value)} />
                </Form.Group>

                <Button className="me-2" variant="primary" type="submit">
                    Submit
                </Button>
                <Button className="btn-sm" variant="outline-primary" type="button" onClick={toggleRegistrationFlag}>
                    Cancel
                </Button>
            </Form>
        </div>
    )
}

export default RegisterForm;
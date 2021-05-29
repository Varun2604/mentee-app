import React, {Component} from "react";
import {Form, Button, Row, Col} from 'react-bootstrap'

import './UserLogin.css'

class UserLogin extends Component {

    constructor(props) {
        super(props);
        // State to store uploaded file
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username : null
        };
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData(e.target);
        let username = data.get('username')
        this.setState({
            'username': username
        });
        this.props.renderChatView(username, 'some-session');
    }
    
    render() {
        return (
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Form className="user-login" onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>What do people call you ?</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="" name="username"/>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Start Chatting
                        </Button>
                    </Form>
                </Col>
                <Col md={2}></Col>
            </Row>

        );
    }
}

export default UserLogin;
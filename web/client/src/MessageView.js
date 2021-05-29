import React, {Component} from "react";
import {Form, Button, Row, Col} from 'react-bootstrap'

import './MessageView.css';


class MessageView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user : this.props.username?this.props.username:'Unknown',
            time : this.props.time,
            message : this.props.message,
            usertype : this.props.usertype?this.props.usertype:'bot'
        };
        if(this.state.usertype === 'bot') {
            this.setState({
                user : 'MenteeBot'
            });
        }
    }

    render() {
        let justifycontent = 'justify-content-start';
        if( this.state.usertype == 'user') {
            justifycontent = 'justify-content-end'
        }
        return (
            <Row>
                <Row className={justifycontent}>
                    <Col className="message-row" md={8}>
                    <Row className="message-meta-row justify-content-between">
                        <Col md={4} className="message-name">{this.state.user}</Col>
                        <Col md={4} className="message-date">{this.state.time}</Col>
                    </Row>
                    <Row className="message-data-row">
                        <Col className="message">{this.state.message}</Col>
                    </Row>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default MessageView;

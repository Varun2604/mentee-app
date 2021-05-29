import React, {Component} from "react";
import {Form, Button, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";

import './ChatView.css';
import MessageView from './MessageView';


class ChatView extends Component {

    constructor(props) {
        super(props)
        this.render = this.render.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.state = {
            messages : [
            ],
            questions: [
                "What's the most recent concern that has been in your mind? Elaborate."
            ],
            original_questions : [
                "Whats your mood been like this past month? Sad? Worthless? Hopeless?",
                "How do you picture yourself right now? Elaborate.",
                "What is your sleep pattern? Do you find troubles falling asleep? ",
                "How has your appetite been in the past month? Are you eating normally?",
                "How would you describe your level of interest or motivation while completing daily activities? Elaborate.",
                "How is your physical health according to you? Elaborate.",
                "Have you easily felt rejected or criticized by others? How do you respond when that happens? Elaborate."
            ],
            question_idx : 0,
            username : props.username,
            usersession : props.usersession,
        };
    }

    submitMessage(e) {
       let message = $('.message-text-area')[0].value;
       console.log(message);
       let messages = this.state.messages;
       messages.push(message);

       let questions = this.state.questions;
       questions.push(this.state.original_questions[this.state.question_idx]);
       this.setState(
           {
               messages,
               questions,
               question_idx : ++this.state.question_idx,
           }
       )
       $('.message-text-area')[0].value = '';
    }
    
    submitParsingFeedback(e){
        var requestOptions = {
            method: 'POST',
            body: {
                'feedback' : "some feedback"
            },
            redirect: 'follow'
        };
        let self = this;
        fetch("/compute_feedback", requestOptions)
        .then(response => response.text())
        .then((result) => {
            result = JSON.parse(result);
            alert(result.message);
        })
        .catch((error) => {
            console.log('error', error);
            alert("Error while submitting feedback, please try again later.");
        });  
    }

    submitComputationFeedback(e){
        var requestOptions = {
            method: 'POST',
            body: {
                'feedback' : "some feedback"
            },
            redirect: 'follow'
        };
        let self = this;
        fetch("/parse_feedback", requestOptions)
        .then(response => response.text())
        .then((result) => {
            result = JSON.parse(result);
            alert(result.message);
        })
        .catch((error) => {
            console.log('error', error);
            alert("Error while submitting feedback, please try again later.");
        });
    }

    renderabc() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <Button variant="outline-primary" 
                        onClick={()=>{this.props.renderFirstView()}}>
                            Back
                        </Button>
                    </div>
                    <div className="col-md-10 justify-content-center">
                        <h2>RESULT</h2>
                    </div>
                </div>
                <div className="row">
                    {/* image div*/}
                    <div className="col-md-6 justify-content-center image-container">
                        <ImageView image={this.props.image}/>
                    </div>
                    {/* data div*/}
                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Parsed Value from Image</Form.Label>
                                        <Form.Control as="textarea" rows={6}>
                                            {this.props.parsed_response}
                                        </Form.Control>
                                    <Button variant="outline-danger" 
                                    onClick={(e)=>{this.submitParsingFeedback(e)}}>
                                        Submit Parsing feedback
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="row justify-content-center">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Result for Image</Form.Label>
                                        <Form.Control as="textarea" rows={6}>
                                            {this.props.compute_response}
                                        </Form.Control>
                                    <Button variant="outline-danger" 
                                    onClick={(e)=>{this.submitComputationFeedback(e)}}>
                                        Submit Computation feedback
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let messagelist = [];
        console.log('messages from state', this.state.messages)
        let cont = (this.state.messages.length > 0 || this.state.questions.length > 0);
        let displayQ = true;
        let idx = 0;
        while(cont) {
            if(displayQ) {
                messagelist.push(
                    <MessageView 
                        username='MenteeBot' 
                        message={this.state.questions[idx]} 
                        time='10:26:45'
                        usertype='bot'
                    />
                )
            }else{
                if(this.state.messages.length > idx) {
                    messagelist.push(
                        <MessageView 
                            username={this.state.username} 
                            message={this.state.messages[idx]} 
                            time='10:26:45'
                            usertype='user'
                        />
                    )
                }
                idx++
            }
            displayQ = !displayQ;
            cont = (this.state.questions.length > idx || this.state.messages.length > idx);
        }
        return (
            <div>
                <Row className="banner-row align-top">
                    <Col md={10}></Col>
                    <Col md={2}>
                        <Button variant="outline-danger">Logout</Button>
                    </Col>
                </Row>
                <Row className="message-log-row">
                    <ul className="container">{messagelist}</ul>
                </Row>
                <Row className="message-send align-bottom">
                    <Col md={10}>
                        <Form.Control className="message-text-area" as="textarea" rows={5}></Form.Control>
                    </Col>
                    <Col md={1}>
                        <span className="send-button" onClick={this.submitMessage}>
                            <FontAwesomeIcon icon={faPaperPlane} size="2x"/>
                        </span>
                    </Col>
                    <Col md={1}>
                        <span className="voice-button">
                            <FontAwesomeIcon icon={faMicrophone} size="2x"/>
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

const ImageView = ({ image }) => {
    return <img className="render-file" src={URL.createObjectURL(image)} alt={image.name} />;
};

export default ChatView;

import React from 'react';
import { Jumbotron, Row, Col, Card, CardBody, CardText } from 'reactstrap';
import "./style.css";

function JumboLowProfile() {
    return (
        <Jumbotron id="jumbo-1">
            <Row>
                <Col>
                    <Card className="petPals1">
                        <CardBody>
                            <CardText className="todo-text1">
                                <p>Here at Pet Pals you can Sign up or Login, and create your own pet profile. This profile contains basic information of your fur or feathered kid, and in the future we hope to enable our users to upload their own personal images. Should you need to edit or remove a pet, we do have the option to delete the profile.</p>
                                <p>
                                    We also have an expense tracker. This tracker enables you to enter in purchases and provides you with a running total, as well as a list of expenses. This helps you better budget for your family, and plan for future furbabies. To go along with out expense tracker we also have a todo list to help you stay organized and keep your pet happy and healthy.
                                </p>
                                <p>
                                    We hope to add more features in the future so you can be the best pet parent possible!
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default JumboLowProfile;
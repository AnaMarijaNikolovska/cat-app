import React from "react";
import { Card } from "react-bootstrap";

export default function CatCard(props) {
    const cardStyle = {
        height: '170px',
        width: '250px',
    };

    const frontCardStyle = {
        ...cardStyle,
        backgroundColor: props.isEven ? '#E2472B' : '#E1E1E1'  // Conditional background color for even and odd cards
    };

    const backCardStyle = {
        ...cardStyle,
        backgroundColor: props.isEven ? 'darkred' : 'lightgray',  // Different color for the back
    };

    return (
        <div className="image-flip">
            <div className="mainflip flip-0">
                <div className="frontside">
                    <Card style={frontCardStyle}
                          // className={'BgColorGradient'}
                    >
                        <Card.Body
                            className="text-center"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <Card.Title className="m-4" style={{
                                color: props.isEven ? 'white' : 'black',
                                textShadow: '4px 4px 8px #3333',
                            }}>
                                {props.breed}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>

                <div className="backside">
                    <Card style={backCardStyle} className={'ReverseBgColorGradient'}>
                        <Card.Body
                            className="text-center"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <Card.Text>
                                <p>
                                    <b>Country:</b> {props.country} <br />
                                    <b>Origin:</b> {props.origin} <br />
                                    <b>Coat Type:</b> {props.coat} <br />
                                    <b>Pattern:</b> {props.pattern} <br />
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

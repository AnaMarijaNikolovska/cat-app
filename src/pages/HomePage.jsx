import React from "react";
import Container from "react-bootstrap/Container";
import GreyCat from '../assets/greycat (1).png';

export default function HomePage() {
    return (
        <Container
            fluid
            style={{
                width: '100%',
                minHeight: 'calc(100vh - 60px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                // padding: '10px',
            }}
        >
            {/* Image Section */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // paddingTop: '50px',
                }}
            >
                <img
                    src={GreyCat}
                    alt="Grey Cat"
                    style={{
                        width: 'auto',
                        maxWidth: '90%',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Text Section */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: '70px',
                    color: 'white',
                }}
            >
                <h1
                    style={{
                        fontFamily: 'Courier New, monospace',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        color: 'white',
                        textShadow: '2px 2px rgb(51, 51, 51)',
                        marginBottom: '20px',
                    }}
                >
                    CAT
                </h1>
                <p
                    style={{
                        fontSize: '19px',
                        textAlign: 'center',
                        lineHeight: '1.8',
                    }}
                >
                    Cats are more than just pets—they are mysterious, playful, and loving companions that bring joy to our lives.
                    From their graceful movements to their curious nature, cats captivate us with their charm.
                    Explore the unique traits of these furry friends, learn fascinating facts, and discover why cats have been adored for centuries.
                </p>
                <h2>🐾</h2>
            </div>
        </Container>
    );
}

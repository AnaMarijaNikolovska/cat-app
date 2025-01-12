import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import CatService from "../service/CatService";

export default function RandomFact() {
    const [currentRoll, setCurrentRoll] = useState(1);
    const [showDice, setShowDice] = useState(true);
    // Alternates between even and odd rolls
    const [isEvenRoll, setIsEvenRoll] = useState(true);

    useEffect(() => {
        // Start rolling animation on page load
        const rollInterval = setInterval(() => {
            // Generate random roll between 1-6
            const randomRoll = Math.floor(Math.random() * 6) + 1;
            setCurrentRoll(randomRoll);
            // Alternates between even and odd rolls
            setIsEvenRoll((prev) => !prev);
        }, 500);

        // Stop rolling and show random fact after 6 seconds
        const timeout = setTimeout(() => {
            clearInterval(rollInterval);
            setShowDice(false);
        }, 6000);

        return () => {
            clearInterval(rollInterval);
            clearTimeout(timeout);
        };
    }, []);

    const [fact, setFact] = useState('');

    useEffect(() => {
        const fetchFact = async () => {
            try {
                const randomFact = await CatService.getRandomFact();
                setFact(randomFact);
            } catch (error) {
                console.error("Failed to fetch cat fact:", error);
            }
        };

        fetchFact();
    }, []);


    return (
        <Container
             fluid
             style={{
                 width: '100%',
                 minHeight: 'calc(100vh - 60px)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 alignContent:'center'
                 // padding: '10px',
             }}>
            {showDice ? (
                <div className="dice" >
                    <ol
                        className={`die-list ${isEvenRoll ? "even-roll" : "odd-roll"}`}
                        data-roll={currentRoll}
                    >
                        <li className="die-item" data-side="1">
                            <span className="dot"></span>
                        </li>
                        <li className="die-item" data-side="2">
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </li>
                        <li className="die-item" data-side="3">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </li>
                        <li className="die-item" data-side="4">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </li>
                        <li className="die-item" data-side="5">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </li>
                        <li className="die-item" data-side="6">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </li>
                    </ol>
                </div>
            ) : (
                <h1> {fact} </h1>
            )}
        </Container>
    );
}

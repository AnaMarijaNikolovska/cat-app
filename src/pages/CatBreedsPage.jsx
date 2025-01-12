import React, { useEffect, useState } from "react";
import CatService from "../service/CatService";
import CatCard from "../components/CatCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CatBreedsPage() {
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getBreeds() {
            try {
                const breedsData = await CatService.getAllBreeds();
                console.log("Fetched Breeds Data:", breedsData);
                setBreeds(breedsData);
            } catch (err) {
                console.error("Error fetching breeds:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getBreeds();
    }, []);

    // Display loading spinner, error message, or the main content
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container
            fluid
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 'calc(100vh - 60px)',
                // width: "100%",
            }}
        >
            <h2 style={{ marginTop: "20px", color:'black'
                // color: '#545048',
                // textShadow: '1px 1px black'
            }} className="mb-5">
                Cat Breeds
            </h2>
            {breeds.length === 0 ? (
                <p>No breeds available at the moment.</p>
            ) : (
                <Row
                    style={{
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: "1200px",
                    }}
                >
                    {breeds.map((breed, index) => (
                        <Col
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2.4}
                            className="mb-3"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <CatCard
                                breed={breed.breed}
                                country={breed.country}
                                origin={breed.origin}
                                coat={breed.coat}
                                pattern={breed.pattern}
                                isEven={index % 2 === 0}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

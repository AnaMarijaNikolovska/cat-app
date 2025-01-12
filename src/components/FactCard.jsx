import React from 'react';
import {Card} from 'react-bootstrap';

export default function FactCard({fact, factNumber}) {
    return (
        <Card border="danger"
              style={{margin: '20px', borderRadius: '10px', width:'1100px'}}>
            <Card.Header className="d-flex justify-content-center align-items-center text-uppercase"
                         style={{fontSize: '1.2rem', color:'#E2472B'}}>
                <span>Fact&nbsp;</span>
                <span className="fw-bold">{factNumber}</span>
            </Card.Header>
            <Card.Body>
                <Card.Text style={{fontStyle: 'italic'}}>
                    {fact}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

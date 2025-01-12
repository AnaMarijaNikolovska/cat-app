import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Pagination } from 'react-bootstrap';
import CatService from "../service/CatService";
import FactCard from '../components/FactCard'; // Import FactCard

export default function CatFactsPage() {
    const [catFacts, setCatFacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [factsPerPage, setFactsPerPage] = useState(10);

    const fetchCatFacts = async (page = 1) => {
        try {
            const factsData = await CatService.getAllCatFacts(page);
            setCatFacts(factsData.data);
            setTotalPages(factsData.totalPages);
            setFactsPerPage(factsData.data.length);
        } catch (error) {
            setError('Error fetching cat facts');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCatFacts(currentPage);
    }, [currentPage]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const generatePaginationItems = () => {
        const items = [];
        const maxPagesToShow = 5;
        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }
        return items;
    };

    return (

        <Container className="d-flex flex-column justify-content-center align-items-center"
                   style={{
                       minHeight: 'calc(100vh - 60px)',
                   }}
        >
            <h2>Cat Facts</h2>
            {catFacts.map((fact, index) => {
                const factNumber = (currentPage - 1) * factsPerPage + index + 1;

                return (
                    <ListGroup.Item key={index} style={{ border: 'none' }}>
                        {/* Use FactCard */}
                        <FactCard fact={fact.fact} factNumber={factNumber} />
                    </ListGroup.Item>
                );
            })}

            <Pagination>
                <Pagination.First
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(1)}
                />
                <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                />
                {generatePaginationItems()}
                <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                />
                <Pagination.Last
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(totalPages)}
                />
            </Pagination>
        </Container>
    );
}

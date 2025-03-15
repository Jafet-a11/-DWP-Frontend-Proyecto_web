// App.js
import React, { useState } from 'react';
import { Layout } from 'antd';
import CharacterGrid from './Components/CharacterGrid'; // Ruta ajustada
import Pagination from './Components/Pagination'; // Ruta ajustada
import Header from '../../Layouts/headear';
import Foooter from '../../Layouts/footer';
const { Content } = Layout;

function PersonajesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const charactersPerPage = 10;
    const totalCharacters = 30; // Número total de personajes

    const characters = Array.from({ length: totalCharacters }, (_, i) => `Personaje ${i + 1}`);

    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    const currentCharacters = characters.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Layout>
            <Header />
            <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CharacterGrid characters={currentCharacters} />
                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                    <Pagination current={currentPage} total={totalCharacters} onChange={handlePageChange} />
                </div>
            </Content>
            <Foooter />
        </Layout>
    );
};

export default PersonajesPage;
// PersonajesPage.js
import React, { useState, useEffect } from 'react';
import { Layout, Spin, Typography } from 'antd';
import CharacterList from './Components/CharacterList'; 
import Pagination from './Components/Pagination';
import Header from '../../Layouts/headear';
import Foooter from '../../Layouts/footer';
import { personajes } from '../../services/MarvelService';
const { Content } = Layout;
const { Title } = Typography;

function PersonajesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const charactersPerPage = 10;
    
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const data = await personajes();
                setCharacters(data); 
            } catch (error) {
                console.error("Error al obtener los personajes:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacters();
    }, []);

    // Filtrar personajes según el término de búsqueda
    const filteredCharacters = characters.filter((character) =>
        character.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    const totalFilteredCharacters = filteredCharacters.length;
    const totalPages = Math.ceil(totalFilteredCharacters / charactersPerPage);

    const handlePageChange = (page) => {
        if (page <= totalPages && page >= 1) {
            setCurrentPage(page);
        }
    };

    const startIndex = (currentPage - 1) * charactersPerPage;
    const currentCharacters = filteredCharacters.slice(startIndex, startIndex + charactersPerPage);

    return (
        <Layout style={{ minHeight: '100vh', position: 'relative' }}>
            <Header setSearchQuery={setSearchTerm}/>
            <Content style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {filteredCharacters.length === 0 && searchTerm && !loading ? (
                    <Title level={4}>No se encontraron resultados para "{searchTerm}"</Title>
                ) : (
                    <>
                        <CharacterList characters={currentCharacters} />
                        <div style={{ textAlign: 'center', marginTop: '15px' }}>
                            <Pagination
                                current={currentPage}
                                total={totalFilteredCharacters} 
                                pageSize={charactersPerPage}
                                onChange={handlePageChange}
                            />
                        </div>
                    </>
                )}
            </Content>
            <Foooter />
            {/* Capa de carga con Spin */}
            {loading && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}>
                    <Spin size="large" />
                </div>
            )}
        </Layout>
    );
}
export default PersonajesPage;
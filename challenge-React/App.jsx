// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';

const App = () => {
    const frontEndVideos = [
        { id: 1, image: 'ruta/a/imagen1.jpg', title: 'Video 1', description: 'Descripción 1' },
        { id: 2, image: 'ruta/a/imagen2.jpg', title: 'Video 2', description: 'Descripción 2' },
        // Otros videos...
    ];

    const backEndVideos = [
        { id: 1, image: 'ruta/a/imagen3.jpg', title: 'Video 3', description: 'Descripción 3' },
        { id: 2, image: 'ruta/a/imagen4.jpg', title: 'Video 4', description: 'Descripción 4' },
        // Otros videos...
    ];

    return (
        <div className="App">
            <Header />
            <main>
                <CategorySection title="FRONT END" videos={frontEndVideos} color="#00f" />
                <CategorySection title="BACK END" videos={backEndVideos} color="#0f0" />
                {/* Agrega más categorías según sea necesario */}
            </main>
            <Footer />
        </div>
    );
};

export default App;

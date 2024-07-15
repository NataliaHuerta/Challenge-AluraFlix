// src/components/CategorySection.js
import React from 'react';
import './CategorySection.css';
import VideoCard from './VideoCard';

const CategorySection = ({ title, videos, color }) => {
    return (
        <section className="category-section" style={{ borderColor: black }}>
            <h2 style={{ backgroundColor: color }}>{title}</h2>
            <div className="videos">
                {videos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;

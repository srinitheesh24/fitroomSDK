import React from 'react';
import './Loader.css'; // Assuming you have a CSS file for loader styles

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;
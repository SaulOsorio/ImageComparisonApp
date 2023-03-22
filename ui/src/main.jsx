import './style.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { TitleSection } from './Titles';
import { UploadImages } from './Upload';



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <TitleSection title="Image Comparison" subtitle="WebApp"/>
        <UploadImages/>
    </React.StrictMode>
);


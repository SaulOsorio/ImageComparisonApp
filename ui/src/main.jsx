import './css/style.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { TitleSection } from './components/Titles';
import { UploadImages } from './components/Upload';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>

        <TitleSection title="Image Comparison" subtitle="WebApp"/>
        <br/>
        <br/>
        <br/>
        <br/>
        <UploadImages/>
        <br/>
    </React.StrictMode>
);


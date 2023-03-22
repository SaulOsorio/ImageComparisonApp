import './style.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { TitleSection } from './Titles';
import { UploadImages } from './Upload';
import { CompareBttn } from './Compare';



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <TitleSection title="Image Comparison" subtitle="WebApp"/>
        <UploadImages/>
        <CompareBttn/>
    </React.StrictMode>
);


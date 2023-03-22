import './style.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { TitleSection } from './Titles';
import { UploadImages } from './Upload';
import { CompareBttn } from './Compare';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <TitleSection title="Image Comparison" subtitle="WebApp"/>
        <UploadImages/>
        <CompareBttn/>
    </React.StrictMode>
);


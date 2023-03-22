import './style.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { TitleSection } from './Titles';
import { CompareBttn } from './Compare';
import { Bttn } from './Section';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <TitleSection title="Image Comparison" subtitle="WebApp"/>
        <Bttn/>
    </React.StrictMode>
);


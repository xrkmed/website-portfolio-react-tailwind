import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import './style/global.css';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <Application />;

console.log('[ERWT] : Application is ready to render');

// Render application in DOM
createRoot(document.getElementById('app')).render(app);

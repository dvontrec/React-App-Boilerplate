// Basics for react app rendering
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './style.css';

// Renders the App element in the document element with the root ID
ReactDom.render(<App />, document.getElementById('root'));

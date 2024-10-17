import React from 'react'
import ReactDOM  from 'react-dom/client'

/* 
    Forma #1
        const rootElement = document.getElementById('root');
        ReactDOM.createRoot(rootElement);
*/

/* 
    Forma #2
        ReactDOM.createRoot(document.getElementById('root'));
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
const html = ReactDOM.createRoot(document.getElementById('html'));

root.render(<h1>Hello World!</h1>);
html.render(<h2>Hola React!</h2>);
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <h1>
            Hello World
        </h1>
    );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App/>)
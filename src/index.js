import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './bootstrap.css';
import './style.css';


// Создаем компонент Root
const Root = () => (
  <div>
    <App />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root /> {/* Рендерим компонент Root */}
  </React.StrictMode>
);
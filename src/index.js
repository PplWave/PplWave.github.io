import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './bootstrap.css';
import './style.css';
import profilePic from './images/profile-pic.jpeg'; // Импорт изображения

// Создаем компонент Root
const Root = () => (
  <div>
    <App />
    <img src={profilePic} alt="Profile" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root /> {/* Рендерим компонент Root */}
  </React.StrictMode>
);
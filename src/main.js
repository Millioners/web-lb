import './styles/main.scss';
import '@/styles/tw.css';

import { initThemeToggle } from './js/common/theme.js';
import { initAbout } from './js/app/aboutPage.js';

initThemeToggle();

const page = document.body.dataset.page;
const routes = {
    about: () => import('./js/app/aboutPage.js').then(m => m.initAbout()),
};

if (routes[page]) {
    routes[page]().catch(err => {
        console.error('Помилка при ініціалізації сторінки:', err);
    });
}
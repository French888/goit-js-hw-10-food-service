import colorCardsTpl from './templates/cards.hbs';
import cardsData from './menu.json';

const galleryRef = document.querySelector('.js-menu');
const markup= colorCardsTpl(cardsData);
galleryRef.insertAdjacentHTML('beforeend', markup);
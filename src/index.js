import { refs } from './refs.js';
import colorCardsTpl from './templates/cards.hbs';
import cardsData from './menu.json';
import './styles.css'
import { getTheme } from './switch-theme.js';
import { switchTheme } from './switch-theme.js';

const galleryRef = document.querySelector('.js-menu');
const markup= cardsData.map(colorCardsTpl).join('');
galleryRef.insertAdjacentHTML('beforeend', markup);

getTheme();
refs.switchRef.addEventListener('change', switchTheme);

  
 
    
  
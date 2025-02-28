import "./styles.css";

import {loadHome} from "./modules/home.js";
import {loadMenu} from "./modules/menu.js";
import {loadAbout} from "./modules/about.js";

const content = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

home.addEventListener('click', () => {
    content.innerHTML = '';
    loadHome();
});

menu.addEventListener('click', () => {
    content.innerHTML = '';
    loadMenu();
});

about.addEventListener('click', () => {
    content.innerHTML = '';
    loadAbout();
});
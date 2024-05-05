import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import WebSocketInitiator from "./utils/websocket-iniatiator";
import CONFIG from "./globals/config";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import data from '../public/data/DATA.json';
/*
const getRestaurant = () => {
  data.restaurants.forEach((restaurant) => {
    const restaurantItem = document.querySelector('.posts');
    restaurantItem.innerHTML += `
        <article class="post-item">
          <img
            class="post-item_thumbnail"
            src="${restaurant.pictureId}"
            alt="${restaurant.name}"
          />
          <div class="post-item_content">
            <p class="post-item_rating">Rating: ${restaurant.rating}</p>
            <h1 class="post-item_title">${restaurant.name}</h1>
            <p class="post-item_description">${restaurant.description}</p>
            <p class="post-item_city">Location: ${restaurant.city}</p>
          </div>
        </article>
      `;
  });
};
getRestaurant(data);

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
*/
const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

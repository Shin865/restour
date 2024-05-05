import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const ListRestaurant = {
  async render() {
    return `
    <div class="heading">
      <h2 class="heading_title">List Restaurant</h2>
        <div id="restaurant" class="restaurant">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector("#restaurant");
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;

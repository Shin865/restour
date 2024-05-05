import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
<section class="content">
<div class="boarding">
    <article class="headline">
        <div class="restaurant_thumbnail">
            <img src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        </div>
    <div class="headline_content">
        <h1 class="headline_title">${restaurant.name}</h1>
        <div class="restaurant_info">
            <h4>Rating</h4>
            <p>${restaurant.rating}</p><br>
            <h4>Location</h4>
            <p>${restaurant.city}</p><br>
            <h4>Address</h4>
            <p>${restaurant.address}</p><br>
            <h4>Description</h4>
            <p>${restaurant.description}</p><br>
            <h4>Menu Makanan</h4>
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join("")}<br>
            <h4>Menu Minuman</h4>
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join("")}<br>
        </div>
    </div>
    </article>
</div>
</section>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
    <div class="restaurant-item_header">
        <img  class="restaurant-item_thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="restaurant-item_rating">
        <p>⭐️<span class="restaurant-item_rating_score">${restaurant.rating}</span></p>
    </div>
    </div>
    <div class="restaurant-item_content">
        <h3 class="restaurant-title"><a href='/#/detail/${restaurant.id}'>${restaurant.name || '-'}</a></h3>
        <h4><i class="restaurant-item_city" style="color: #e00022;">${restaurant.city}</i></h4>
    </div>
</div>
`;

const createRestaurantAddDetailReviewTemplate = () => `
<section class="input_section">
    <form>
        <div class="input">
            <label for="name">Nama</label>
            <input type="text" id="name" required>
        </div>
        <div class="input">
            <label for="review">Beri Komentar</label>
            <textarea type="text" id="review" required></textarea>
        </div>
        <button class="form_submit_button">Submit</button>
    </form>
</section>
`;

const createRestaurantDetailReviewTemplate = (customer) => `
    <div class="list">
            <div class="user-image"><i class="fa-solid fa-user"></i></div>
                <div class="name">${customer.name}</div>
                <div class="date">${customer.date}</div>
                <div class="comment-post">${customer.review}</div>
            </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailReviewTemplate,
  createRestaurantAddDetailReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

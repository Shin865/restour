import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailReviewTemplate,
  createRestaurantAddDetailReviewTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ButtonAddReview from '../../utils/review-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div class="heading">
      <h2 class="heading_title">Detail Restaurant</h2>
    <section class="detail_restaurant" id="detail_restaurant"></section>
    </div>

    <div class="heading">
      <h3 class="heading_title">Review Restaurant</h3>
    <div clas="comment-session">
      <div class="post-comments"></div>
      <div class="post-comment"></div>
    </div>

    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#detail_restaurant');
    const restaurantReviewContainer = document.querySelector('.post-comment');
    console.log(restaurantReviewContainer);
    const restaurantAddReviewContainer = document.querySelector('.post-comments');
    console.log(restaurantAddReviewContainer);

    detailContainer.innerHTML = createRestaurantDetailTemplate(detail);
    restaurantAddReviewContainer.innerHTML = createRestaurantAddDetailReviewTemplate();
    restaurantReviewContainer.innerHTML = detail.customerReviews
      .map((customer) => createRestaurantDetailReviewTemplate(customer))
      .join('');

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: detail.id,
        name: detail.name,
        rating: detail.rating,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        address: detail.address,
        foods: detail.menus.foods,
        drinks: detail.menus.drinks,
        reviews: detail.customerReviews,
      },
    });

    const submitAddReview = document.querySelector('.form_submit_button');
    submitAddReview.addEventListener('click', async () => {
      await ButtonAddReview.init({
        id: detail.id,
      });
      const result = await RestaurantSource.detailRestaurant(detail.id);
      restaurantReviewContainer.innerHTML = result.customerReviews
        .map((customer) => createRestaurantDetailReviewTemplate(customer))
        .join('');
    });
    console.log(submitAddReview);
  },
};

export default Detail;

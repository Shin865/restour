const assert = require('assert');

Feature('Liking Restaurant');

Scenario('Liking and unLiking one Restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-title a');
  const firstRestaurant = locate('.restaurant-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  console.log(firstRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-title a');
  const LikedRestaurantTitle = await I.grabTextFrom('.restaurant-title a');

  assert.strictEqual(firstRestaurantTitle, LikedRestaurantTitle);

  I.seeElement('.restaurant-item');
  const likedRestaurant = locate('.restaurant-title a').first();
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSee(firstRestaurantTitle);
});

import RestaurantDBSource from '../../data/restaurantdb-source';

const Restaurants = {
  async render() {
    return `
      <h2>Lists of Restaurants</h2>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDBSource.listRestaurants();
    // eslint-disable-next-line no-console
    console.log(restaurants);
  },
};

export default Restaurants;

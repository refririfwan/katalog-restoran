import UrlParser from '../../routes/url-parser';
import RestaurantDBSource from '../../data/restaurantdb-source';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
    // eslint-disable-next-line no-console
    console.log(restaurant);
  },
};

export default Detail;

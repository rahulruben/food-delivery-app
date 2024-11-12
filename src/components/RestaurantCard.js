/**
 * RestaurantCard Component
 * Displays a card with restaurant details, including an image and description.
 *
 * @returns {JSX.Element} A div representing a restaurant card.
 */
const RestaurantCard = ({ restaurant }) => {
  const { name, cuisine, rating, delivery_time } = restaurant;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card-image"
        src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50"
        alt="Restaurant"
      />
      <h3>{name}</h3>
      <h5>{cuisine}</h5>
      <h5>{rating} stars</h5>
      <h5>{delivery_time}</h5>
    </div>
  );
};

export default RestaurantCard;

/**
 * NavContainer Component
 * Renders the navigation items such as Home, About Us, Contact Us, and Cart.
 *
 * @returns {JSX.Element} A div containing an unordered list of navigation items.
 */
const NavContainer = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default NavContainer;

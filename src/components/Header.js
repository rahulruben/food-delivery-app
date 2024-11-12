import Logo from "./Logo";
import NavContainer from "./NavContainer";

/**
 * Header Component
 * Displays the logo and navigation items at the top of the app.
 *
 * @returns {JSX.Element} A div that contains both the Logo and NavContainer components.
 */
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavContainer />
    </div>
  );
};

export default Header;

/**
 * Logo Component
 * Displays the logo image for the app.
 *
 * @returns {JSX.Element} A logo element wrapped in a div.
 */
const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqFrCVksYvoEmXEuleFofdLdIYias2JsSETf5bafjd0WRUZ34MsmqUxPsNNtzGIKwLmA&usqp=CAU"
        alt="Food delivery App"
      />
    </div>
  );
};

export default Logo;

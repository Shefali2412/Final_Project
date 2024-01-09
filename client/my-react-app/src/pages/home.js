import Header from "../components/header";
import Footer from "../components/footer";

export const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <section className="introduction-section">
        <h1>Welcome to RecipeHub</h1>
        <p>
          Your ultimate destination for culinary inspiration and organization.
          Discover, create, and savor delightful recipes in one central hub.
        </p>
      </section>

      <section className="why-recipehub-section">
        <h2>Why RecipeHub?</h2>
        <div className="feature">
          <h3>Effortless Organization</h3>
          <p>
            Streamline your recipe collection with easy-to-use tools for adding,
            editing, and categorizing your favorite dishes.
          </p>
        </div>
        <div className="feature">
          <h3>Inspiration Galore</h3>
          <p>
            Explore a vast array of recipes from diverse cuisines to spark your
            creativity in the kitchen.
          </p>
        </div>
        <div className="feature">
          <h3>Seamless Cooking</h3>
          <p>
            Access your recipes anytime, anywhere, making meal planning and
            cooking a breeze.
          </p>
        </div>
      </section>

      <section className="key-features-section">
        <h2>Key Features</h2>
        <div className="feature">
          <h3>Recipe Management</h3>
          <p>
            Effortlessly add, edit, and delete recipes with our intuitive
            interface.
          </p>
        </div>
        <div className="feature">
          <h3>Categorization</h3>
          <p>
            Organize your recipes by categories to quickly find the perfect dish
            for any occasion.
          </p>
        </div>
        <div className="feature">
          <h3>User-Friendly</h3>
          <p>
            Enjoy a user-friendly experience designed to enhance your culinary
            journey.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

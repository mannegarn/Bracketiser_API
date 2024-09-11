import React from "react";
import { Link } from "react-router-dom";

// Define the HomePage component
const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addlist">Add List</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <h1>Bracketiser</h1>
      <section>
        <h2>About</h2>
        <p>
          A tool to settle all those heated arguments. Strawberry or chocolate
          milk? Mother Theresa or hedgehogs? Is Golden Wind better than Stardust
          Crusaders?
        </p>
      </section>
    </div>
  );
};

// Export the HomePage component
export default HomePage;

import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4">Grow Your Brand with Top Influencers</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        We connect brands with the right influencers to drive engagement and increase visibility.
      </p>
      <Button text="Get Started" />
    </div>
  );
};

export default Home;

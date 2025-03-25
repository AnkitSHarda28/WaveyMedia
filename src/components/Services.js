import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Influencer Campaigns</h3>
          <p>We help you run effective influencer marketing campaigns tailored to your brand.</p>
        </div>
        <div className="service-card">
          <h3>Brand Partnerships</h3>
          <p>Connecting brands with top influencers for long-term growth.</p>
        </div>
        <div className="service-card">
          <h3>Content Strategy</h3>
          <p>We create customized content strategies for impactful campaigns.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;

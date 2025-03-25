import React from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Card from "../components/Card";

const Services = () => {
  return (
    <div className="container mx-auto py-12 text-center">
      <h3 className="text-3xl font-semibold mb-6">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <Card icon={<FaInstagram />} title="Instagram Campaigns" description="Boost your brand visibility with curated Instagram promotions." />
        <Card icon={<FaYoutube />} title="YouTube Collaborations" description="Leverage video content through YouTube influencers." />
        <Card icon={<FaTiktok />} title="TikTok Promotions" description="Engage with a younger audience through viral TikTok marketing." />
      </div>
    </div>
  );
};

export default Services;

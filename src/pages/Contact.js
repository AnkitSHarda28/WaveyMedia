import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 text-center">
      <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
      <p className="text-gray-600 max-w-2xl mx-auto mb-4">
        Have questions? Reach out to us at <strong>contact@influenceragency.com</strong>.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Send a Message</button>
    </div>
  );
};

export default Contact;

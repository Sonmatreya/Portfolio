import React, { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://getform.io/f/aqoevrga", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-clear status message after 4 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500 mb-4">
              Let's Talk
            </h3>
            <p>I&apos;m open to discussing web development projects or partnership opportunities.</p>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-red-800 mr-2" />
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL}`}
                className="hover:underline text-red-500"
              >
                {import.meta.env.VITE_EMAIL}
              </a>
            </div>

            <div className="mb-4">
              <FaPhone className="inline-block text-red-800 mr-2" />
              <span className="text-red-500">{import.meta.env.VITE_PHONE}</span>
            </div>

            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-red-800 mr-2" />
              <span className="text-red-500 block">{import.meta.env.VITE_ADDRESS}</span>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full p-2 rounded bg-gray-800 border border-red-800 focus:outline-none focus:border-yellow-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 rounded bg-gray-800 border border-red-800 focus:outline-none focus:border-yellow-500"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full p-2 rounded bg-gray-800 border border-red-800 focus:outline-none focus:border-yellow-500"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center bg-gradient-to-r from-red-800 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Send"
                )}
              </button>
            </form>

            {status && (
              <p className="mt-4 text-center text-sm text-yellow-400 transition-opacity duration-500">
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

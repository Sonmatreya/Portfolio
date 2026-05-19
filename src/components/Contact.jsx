import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

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
      const response = await fetch(
        "https://getform.io/f/aqoevrga",
        {
          method: "POST",
          body: data,
        }
      );

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

  // Auto-clear status
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div
      className="bg-gradient-to-br from-yellow-50 via-white to-red-50
      text-black py-20"
      id="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Heading */}
        <h2
          className="text-5xl font-extrabold text-center mb-14
          text-transparent bg-clip-text
          bg-gradient-to-r from-red-700 to-yellow-500"
        >
          Contact Me
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12
          items-start"
        >

          {/* Left Side */}
          <div
            className="bg-white rounded-3xl p-8 shadow-2xl
            border border-red-100 hover:shadow-red-200/40
            transition duration-500"
          >

            <h3
              className="text-3xl font-bold mb-4
              text-transparent bg-clip-text
              bg-gradient-to-r from-red-700 to-yellow-500"
            >
              Let's Talk
            </h3>

            <p className="text-gray-700 leading-relaxed">
              I’m open to discussing web development projects,
              MERN stack opportunities, internships,
              and creative collaborations.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">

              {/* Email */}
              <div
                className="flex items-center gap-4 p-4
                rounded-2xl bg-red-50
                hover:bg-red-100 transition duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full
                  bg-gradient-to-r from-red-600 to-yellow-500
                  flex items-center justify-center text-white text-xl"
                >
                  <FaEnvelope />
                </div>

                <div>
                  <p className="font-semibold">Email</p>

                  <a
                    href={`mailto:${import.meta.env.VITE_EMAIL}`}
                    className="text-red-600 hover:underline"
                  >
                    {import.meta.env.VITE_EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-center gap-4 p-4
                rounded-2xl bg-red-50
                hover:bg-red-100 transition duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full
                  bg-gradient-to-r from-red-600 to-yellow-500
                  flex items-center justify-center text-white text-xl"
                >
                  <FaPhone />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>

                  <p className="text-red-600">
                    {import.meta.env.VITE_PHONE}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div
                className="flex items-center gap-4 p-4
                rounded-2xl bg-red-50
                hover:bg-red-100 transition duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full
                  bg-gradient-to-r from-red-600 to-yellow-500
                  flex items-center justify-center text-white text-xl"
                >
                  <FaMapMarkedAlt />
                </div>

                <div>
                  <p className="font-semibold">Location</p>

                  <p className="text-red-600">
                    {import.meta.env.VITE_ADDRESS}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div
            className="bg-white rounded-3xl p-8 shadow-2xl
            border border-red-100 hover:shadow-red-200/40
            transition duration-500"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"

                  className="w-full p-4 rounded-xl
                  bg-white border border-gray-300
                  focus:outline-none focus:border-red-500
                  focus:ring-2 focus:ring-red-200
                  transition duration-300"

                  placeholder="Enter your name"

                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"

                  className="w-full p-4 rounded-xl
                  bg-white border border-gray-300
                  focus:outline-none focus:border-red-500
                  focus:ring-2 focus:ring-red-200
                  transition duration-300"

                  placeholder="Enter your email"

                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"

                  rows="5"

                  className="w-full p-4 rounded-xl
                  bg-white border border-gray-300
                  focus:outline-none focus:border-red-500
                  focus:ring-2 focus:ring-red-200
                  transition duration-300 resize-none"

                  placeholder="Write your message..."

                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"

                disabled={loading}

                className={`w-full flex items-center justify-center gap-3
                bg-gradient-to-r from-red-600 to-yellow-500
                text-white font-semibold py-4 rounded-xl
                shadow-lg hover:shadow-red-400/40
                hover:scale-[1.02]
                transition duration-300 ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
              >

                {loading ? (
                  <div
                    className="w-6 h-6 border-2 border-white
                    border-t-transparent rounded-full animate-spin"
                  ></div>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}

              </button>

            </form>

            {/* Status */}
            {status && (
              <p
                className="mt-6 text-center text-sm
                font-medium text-red-600"
              >
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
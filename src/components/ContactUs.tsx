const ContactUs = () => {
  return (
    <>
      {/* Title Section */}
      <div className="bg-[#036082] text-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-[#F4A261]">CONTACT US</h2>
        <p className="text-base leading-relaxed text-white mt-4">
          Have questions or need more information? Feel free to reach out to us
          via the contact form below or through our social media channels.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-[#F4A261]">
          Get in Touch
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-medium text-lg text-[#F4A261]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-medium text-lg text-[#F4A261]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="font-medium text-lg text-[#F4A261]"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#F4A261] text-white font-semibold rounded-md hover:bg-[#e08c4a] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3 text-[#F4A261]">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-[#F4A261] hover:text-[#e08c4a]"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="text-[#F4A261] hover:text-[#e08c4a]"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="text-[#F4A261] hover:text-[#e08c4a]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-[#F4A261] mt-2"></div>
    </>
  );
};

export default ContactUs;

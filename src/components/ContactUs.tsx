const ContactUs = () => {
  return (
    <>
      {/* Title Section */}
      <div className="bg-[#036082] text-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#F4A261]">Contact Us</h2>
        <p className="text-base leading-relaxed mt-4">
          Have questions or need more information? Feel free to reach out to us
          via the contact form below or through our social media channels.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[#F4A261] mb-6">Get in Touch</h3>
        <form className="space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-[#F4A261] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-[#F4A261] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-[#F4A261] mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#F4A261] text-white font-semibold rounded-md hover:bg-[#e08c4a] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-[#F4A261] mb-4">Follow Us</h3>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            className="text-[#F4A261] hover:text-[#e08c4a] transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-[#F4A261] hover:text-[#e08c4a] transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-[#F4A261] hover:text-[#e08c4a] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-[#F4A261] mt-4"></div>
    </>
  );
};

export default ContactUs;

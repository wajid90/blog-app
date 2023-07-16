import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h4 className="text-headingColor font-[700] text-[1.7rem] mb-8">
          Get In Touch
        </h4>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56799.723697270274!2d78.3533992703112!3d27.156833555297055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974469872bde991%3A0xdf84663a8c11acee!2sFirozabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1689456989537!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0  md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form action="" className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-3 focus:outline-none rounded-[5px] border-0"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Name"
                  className="w-full p-3 focus:outline-none rounded-[5px] border-0"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="email"
                  rows={3}
                  placeholder="White your message"
                  className="w-full p-3 focus:outline-none rounded-[5px] border-0"
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

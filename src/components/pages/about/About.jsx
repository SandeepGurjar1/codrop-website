import React, { useRef } from "react";
import "./About.css";
import logoText from "../../../assets/images/logo_text.png";
import commingSoon from "../../../assets/images/comming_soon.png";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_CODROP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_CODROP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_CODROP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS !!");
        },
        (error) => {
          console.log("FAILED : ", error);
        }
      );
  };

  return (
    <div>
      <section class="text-gray-800 body-font">
        <div class=" px-5 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-black mb-1 tracking-wider">
                    Privacy
                  </h2>
                  <p class="leading-relaxed">
                    Codrop believes in high privacy of users and is working for
                    the same. We provide the best possible privacy and security.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-black mb-1 tracking-wider">
                    Performance
                  </h2>
                  <p class="leading-relaxed">
                    Codrop works hard to provide you with the best ever
                    experience and with all the necessary resources at a single
                    platform. The platform is build to decrease your search time
                    and save time for your work.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-black mb-1 tracking-wider">
                    User
                  </h2>
                  <p class="leading-relaxed">
                    Codrop is working to provide user a high and extensive
                    experience. As of now we have your coding profile
                    visualization. In future we plan to provide you user and
                    indepth analysis of each of their profile. We will be adding
                    a predicted graph feature too.
                  </p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-black mb-1 tracking-wider">
                    Target
                  </h2>
                  <p class="leading-relaxed">
                    Codrop target is to ease your navigation. We have planned
                    for high scalable site to provide you what you want through
                    our prediction algorithm which will be integrated lately.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="lg:w-3/5 md:w-1/2 object-center rounded-lg md:mt-0 mt-12"
              src={logoText}
              alt="codrop"
            />
          </div>
        </div>
      </section>

      <section class="text-gray-600 font-extrabold">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col items-center justify-center w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-extrabold title-font text-gray-900 mb-4">
              Short Memories
            </h1>
            <p class="leading-relaxed text-base">
              Below are the short glipses of our team while working for the
              betterment of codrop.
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={commingSoon}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={commingSoon}
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={commingSoon}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src={commingSoon}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={commingSoon}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src={commingSoon}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-400 bg-gray-900 flex items-center justify-center body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap items-center justify-center -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={commingSoon}
                />
                <p class="leading-relaxed"></p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  Sandeep Gurjar
                </h2>
                <p class="text-gray-500">Product Head</p>
                <p class="text-gray-500">Frontend Developer</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={commingSoon}
                />
                <p class="leading-relaxed">Will be available soon.</p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  NA
                </h2>
                <p class="text-gray-500">NA</p>
                <p class="text-gray-500">NA</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={commingSoon}
                />
                <p class="leading-relaxed">Will be available soon.</p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  NA
                </h2>
                <p class="text-gray-500">NA</p>
                <p class="text-gray-500">NA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="absolute inset-0 bg-gray-900">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.80185929636!2d78.19089894999999!3d26.21415585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1657633875539!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            marginheight="0"
            marginweight="0"
            loading="lazy"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5">
              We would love to hear from you. Please share your valuable
              feedback.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <label for="email" class="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label for="message" class="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="submit"
                class="text-white bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-red-500 border-0 py-2 px-6 focus:outline-none rounded text-lg"
              >
                Submit
              </motion.button>
            </form>
            <p class="text-xs text-gray-400 text-opacity-90 mt-3">
              You response will be saved and will be full-filled soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

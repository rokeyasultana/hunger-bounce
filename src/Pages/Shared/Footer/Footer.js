import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer class="bg-gray-900">
  <div class="container mx-auto py-8 px-4 flex flex-wrap justify-between items-center">
    <div class="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
      <p class="text-red-500 font-bold text-lg">Hunger Bounce</p>
      <p class="text-gray-500 text-sm">© 2023 All rights reserved.</p>
    </div>
    <div class="w-full md:w-auto text-center">
      <a href="#" class="inline-block mx-4 text-white hover:text-gray-400">
        About Us
      </a>
      <a href="#" class="inline-block mx-4 text-white hover:text-gray-400">
        Contact Us
      </a>
      <a href="#" class="inline-block mx-4 text-white hover:text-gray-400">
        Privacy Policy
      </a>
    </div>
    <div class="w-full md:w-auto text-center">
      <a href="#" class="inline-block mx-4 text-red-500 hover:text-gray-400">
        Facebook
      </a>
      <a href="#" class="inline-block mx-4 text-red-500 hover:text-gray-400">
        Twitter
      </a>
      <a href="#" class="inline-block mx-4 text-red-500 hover:text-gray-400">
        Instagram
      </a>
    </div>
  </div>
</footer>
 
        </div>
    );
};

export default Footer;
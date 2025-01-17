"use client";
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-black px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 justify-center">
        {/* Logo and Social Links */}
        <div>
          <a href="javascript:void(0)">
          <Image
  src="/images/logo.png"
  alt="Logo"
  width={200} // specify width
  height={200} // specify height
  
  priority
  
/>
          </a>
          <ul className="mt-10 flex space-x-5">
            <li className="relative group">
              <a href="https://www.facebook.com/NimraAkram222" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-black p-1 rounded">
                
              </span>
            </li>
            <li>
              <a href="https://github.com/Nimraakram12" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.494.998.108-.774.42-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.527.116-3.18 0 0 1.01-.323 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.004 2.045.137 3 .405 2.29-1.554 3.3-1.23 3.3-1.23.652 1.653.24 2.876.118 3.18.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.624-5.475 5.92.432.372.816 1.103.816 2.222v3.293c0 .32.192.694.8.577C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nimra-akram-6ab0522b5/" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11.25 19h-3v-9h3v9zm-1.5-10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 10.5h-3v-4.5c0-1.12-.01-2.56-1.65-2.56-1.65 0-1.9 1.28-1.9 2.48v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.6 2.01 3.6 4.64v4.69z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Other sections remain the same */}
        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold text-lg">Categories</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
              Popular Posts
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
              Latest Articles
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
              SEO Tips
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
              Content Creation
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-lg">Services</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Partner
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Capital
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-lg">Company</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-lg">Contact</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-gray-400">
        <p>Copyright © 2024 Nimra Akram  </p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
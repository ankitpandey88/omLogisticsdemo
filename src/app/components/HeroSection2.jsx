

// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/ombg1.png" // Ensure this path is correct for your background image
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional overlay */}
//       </div>

//       {/* Buttons in the center */}
//       <div className="relative flex justify-center  items-center h-full z-10" style={{marginLeft:"800px"}}>
//         <div className="space-x-4  mt-[200px]">
//           <button className="bg-[#f27b21] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#002D62]">
//             Track Shipment
//           </button>
//           <button className="bg-[#f27b21] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#002D62]">
//             Branch Locator
//           </button>
//           <button className="bg-[#f27b21] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#002D62]">
//             Pickup Request
//           </button>
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className="absolute top-1/2 left-5 transform -translate-y-1/2 space-y-4 z-20">
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full text-white shadow-lg hover:bg-blue-600">
//           <FaFacebookF />
//         </a>
//         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-400 rounded-full text-white shadow-lg hover:bg-blue-300">
//           <FaTwitter />
//         </a>
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full text-white shadow-lg hover:bg-pink-400">
//           <FaInstagram />
//         </a>
//         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-800 rounded-full text-white shadow-lg hover:bg-blue-700">
//           <FaLinkedinIn />
//         </a>
//         <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-400">
//           <FaWhatsapp />
//         </a>
//         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full text-white shadow-lg hover:bg-red-500">
//           <FaYoutube />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// // "use client";
// // import React from "react";
// // import Image from "next/image";
// // import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

// // const HeroSection = () => {
// //   return (
// //     <div className="relative h-screen flex">
// //       {/* Left Side with Image */}
// //       <div className="w-4/5 relative">
// //         <Image
// //           src="/ombg1.png" // Ensure this path is correct for your background image
// //           alt="Background Image"
// //           layout="fill"
// //           objectFit="cover"
// //           priority
// //         />
// //       </div>

// //       {/* Right Side with Buttons */}
// //       <div className="w-12/2 bg-blue-900 text-white flex flex-col justify-center items-start p-16">
// //         <h1 className="text-4xl font-bold mb-10">Welcome to Our Service</h1>
// //         <button className="mb-6 bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition">
// //           Track Shipment
// //         </button>
// //         <button className="mb-6 bg-green-500 text-black py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition">
// //           Branch Locator
// //         </button>
// //         <button className="bg-red-500 text-black py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition">
// //           Pickup Request
// //         </button>
// //       </div>

// //       {/* Social Media Icons */}
// //       <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-20">
// //         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 rounded-full p-2 shadow-lg hover:bg-blue-600 transform hover:rotate-6 transition">
// //           <FaFacebookF />
// //         </a>
// //         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-400 rounded-full p-2 shadow-lg hover:bg-blue-300 transform hover:rotate-6 transition">
// //           <FaTwitter />
// //         </a>
// //         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white bg-pink-500 rounded-full p-2 shadow-lg hover:bg-pink-400 transform hover:rotate-6 transition">
// //           <FaInstagram />
// //         </a>
// //         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-800 rounded-full p-2 shadow-lg hover:bg-blue-700 transform hover:rotate-6 transition">
// //           <FaLinkedinIn />
// //         </a>
// //         <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 rounded-full p-2 shadow-lg hover:bg-green-400 transform hover:rotate-6 transition">
// //           <FaWhatsapp />
// //         </a>
// //         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white bg-red-600 rounded-full p-2 shadow-lg hover:bg-red-500 transform hover:rotate-6 transition">
// //           <FaYoutube />
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;



import Image from "next/image";
import { BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/outline"; 


export default function  HeroSection() {
  return (
    <div className="py-10 px-5">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Card 1 */}
        <div className="border rounded-lg p-6 text-center">
          <div className="mb-4" style={{marginLeft:"170px"}}>
            {/* Replace with om logo */}
            <Image src="/omlogo.png" alt="OM Logo" width={50} height={50}  />
          </div>
          <p className="font-semibold text-lg mb-2">New to Omlogistics.co.in?</p>
          <p className="text-gray-600 mb-4">
            Sign up to book, manage and pay your shipments online, and access a
            suite of products and services designed to simplify your supply
            chain.
          </p>
          <button className=" bg-[#002D62] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#f27b21] text-white">
            Register now
          </button>
        </div>
        {/* Card 2 */}
        <div className="border rounded-lg p-6 text-center">
          <div className="mb-4">
            {/* How to get started icon */}
            <BookOpenIcon className="h-10 w-10 text-gray-600 mx-auto" />
          </div>
          <p className="font-semibold text-lg mb-2">How to get started</p>
          <p className="text-gray-600 mb-4">
            Whether you need to find prices, place a booking, submit documents,
            or track your cargo, our step-by-step guides will help you find your
            way around.
          </p>
          <button className="bg-[#002D62] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#f27b21] text-white">
            Learn more
          </button>
        </div>
        {/* Card 3 */}
        <div className="border rounded-lg p-6 text-center">
          <div className="mb-4">
            {/* Become a logistics expert icon */}
            <AcademicCapIcon className="h-10 w-10 text-gray-600 mx-auto" />
          </div>
          <p className="font-semibold text-lg mb-2">Become a logistics expert</p>
          <p className="text-gray-600 mb-4">
            Discover insights, introductory videos, explanatory articles and
            gain the confidence you need to optimize your supply chain.
          </p>
          <button className="bg-[#002D62] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#f27b21] text-white">
            Learn more
          </button>
        </div>
      </div>

      {/* Logistics Solutions Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-2">Logistics solutions</h2>
        <p className="text-gray-600 mb-4">
          From the farm to your fridge, or the warehouse to your wardrobe,
          om logistic  is developing solutions that meet customer 
        </p>
        <button className="bg-[#002D62] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#f27b21] text-white">
          See all solutions
        </button>
      </div>

      {/* Image Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="/ts.png"
            alt="Transportation Services"
            width={470}
            height={280}
            className="w-full"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Transportation Services</h3>
            <p className="text-gray-600">
              Learn how om logistic offers small and large businesses the opportunity
              to grow.  We focus on solving your supply chain needs from end to end,
              
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="/chain.png"
            alt="Supply Chain and Logistics"
            width={500}
            height={300}
            className="w-full"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Supply Chain and Logistics</h3>
            <p className="text-gray-600">
              We focus on solving your supply chain needs from end to end,
              taking the complexity out of container shipping for you.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="/digital.jpg"
            alt="Digital Solutions"
            width={500}
            height={300}
            className="w-full"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Digital Solutions</h3>
            <p className="text-gray-600">
              Our tailored online services take the complexity out of shipping
              by letting you instantly book, manage and track shipments, submit
              Verified Gross Mass information, and much more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


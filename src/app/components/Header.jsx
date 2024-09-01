


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { BiSearchAlt } from "react-icons/bi";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMouseEnter = (menu) => {
//     setHoveredMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setHoveredMenu(null);
//   };

//   return (
//     <>
//       <header className="bg-white text-white font-medium sticky top-0 z-40 shadow-sm shadow-black/20">
//         {/* Top section with contact info */}
//         <div className="bg-[#002D62] py-2 px-5 flex items-center justify-between">
//           <div className="flex items-center">
//             <img src="/omlogo.png" alt="OM Logistics Logo" className="h-16 w-16 rounded-full object-cover" />
//             <div className="ml-2">
//               <h1 className="font-bold text-xl">OM LOGISTICS LTD.</h1>
//               <p className=" fot-bold text-base text-[#f27b21]">Making Business Simple</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             {/* Phone Contact with First Design */}
            // <a href="tel:+917669005500" className="flex items-center space-x-2 text-white bg-[white] py-1 px-3 rounded-md">
            //   <FaPhoneAlt className="text-black color]" color="#f27b21" />
            //   <span className="text-black">+91 76690 05500</span>
            // </a>
            // {/* Email Contact with Second Design */}
            // <a href="mailto:omgroup@omlogistics.co.in" className="flex items-center space-x-2 text-black bg-[white] py-1 px-3 rounded-full">
            //   <FaEnvelope className="text-black" color="#f27b21" />
            //   <span className="text-black">omgroup@omlogistics.co.in</span>
            // </a>
//           </div>
//         </div>

//         {/* Navigation Bar */}
//         <div className="py-3 px-12 flex items-center justify-between bg-white shadow-md" style={{marginLeft:"130px"}}>
//           <nav className="flex items-center space-x-6 font-semibold text-base">
//             <Link href="/" className="text-black hover:text-[#f27b21]">
//               About Us
//             </Link>

//             {/* Dropdown: What We Offer */}
//             <div
//               onMouseEnter={() => handleMouseEnter("what-we-offer")}
//               onMouseLeave={handleMouseLeave}
//               className="relative"
//             >
//               <Link href="" className="text-black hover:text-[#f27b21]">
//                 What We Offer
//               </Link>
//               {hoveredMenu === "what-we-offer" && (
//                 <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 w-56">
//                   <Link href="/service-1" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Service 1
//                   </Link>
//                   <Link href="/service-2" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Service 2
//                   </Link>
//                   <Link href="/service-3" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Service 3
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Dropdown: Industries We Serve */}
//             <div
//               onMouseEnter={() => handleMouseEnter("industries-we-serve")}
//               onMouseLeave={handleMouseLeave}
//               className="relative"
//             >
//               <Link href="" className="text-black hover:text-[#f27b21]">
//                 Industries We Serve
//               </Link>
//               {hoveredMenu === "industries-we-serve" && (
//                 <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 w-56">
//                   <Link href="/industry-1" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Industry 1
//                   </Link>
//                   <Link href="/industry-2" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Industry 2
//                   </Link>
//                   <Link href="/industry-3" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Industry 3
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Dropdown: Retail Express */}
//             <div
//               onMouseEnter={() => handleMouseEnter("retail-express")}
//               onMouseLeave={handleMouseLeave}
//               className="relative"
//             >
//               <Link href="" className="text-black hover:text-[#f27b21]">
//                 Retail Express
//               </Link>
//               {hoveredMenu === "retail-express" && (
//                 <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 w-56">
//                   <Link href="/retail-option-1" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Retail Option 1
//                   </Link>
//                   <Link href="/retail-option-2" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Retail Option 2
//                   </Link>
//                   <Link href="/retail-option-3" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Retail Option 3
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Dropdown: Media Room */}
//             <div
//               onMouseEnter={() => handleMouseEnter("media-room")}
//               onMouseLeave={handleMouseLeave}
//               className="relative"
//             >
//               <Link href="" className="text-black hover:text-[#f27b21]">
//                 Media Room
//               </Link>
//               {hoveredMenu === "media-room" && (
//                 <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 w-56">
//                   <Link href="/media-option-1" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Media Option 1
//                   </Link>
//                   <Link href="/media-option-2" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Media Option 2
//                   </Link>
//                   <Link href="/media-option-3" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Media Option 3
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Dropdown: Sustainability */}
//             <div
//               onMouseEnter={() => handleMouseEnter("sustainability")}
//               onMouseLeave={handleMouseLeave}
//               className="relative"
//             >
//               <Link href="" className="text-black hover:text-[#f27b21]">
//                 Sustainability
//               </Link>
//               {hoveredMenu === "sustainability" && (
//                 <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 w-56">
//                   <Link href="/sustainability-option-1" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Sustainability Option 1
//                   </Link>
//                   <Link href="/sustainability-option-2" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Sustainability Option 2
//                   </Link>
//                   <Link href="/sustainability-option-3" className="block px-4 py-2 hover:bg-[#f27b21] hover:text-white">
//                     Sustainability Option 3
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link href="" className="text-black hover:text-[#f27b21]">
//               Contact Us
//             </Link>
//             <Link href="" className="text-black hover:text-[#f27b21]">
//               Join Us
//             </Link>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <div className="relative flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-64 pl-4 pr-10 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-blue-600"
//               />
//               <BiSearchAlt className="absolute right-3 text-gray-500" />
//             </div>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="text-xl focus:outline-none">
//               {isMenuOpen ? "Close" : "Menu"}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <nav className="block md:hidden bg-gray-100 px-2 pt-2 pb-4">
//             <Link href="" className="block px-2 py-1 text-black hover:bg-blue-600 hover:text-white rounded">
//               About Us
//             </Link>
//             <Link href="" className="block px-2 py-1 text-black hover:bg-blue-600 hover:text-white rounded">
//               What We Offer
//             </Link>
//             <Link href="" className="block px-2 py-1 text-black hover:bg-blue-600 hover:text-white rounded">
//               Industries We Serve
//             </Link>
//             <Link href="" className="block px-2 py-1 text-black hover:bg-blue-600 hover:text-white rounded">
//               Retail Express
//             </Link>
//             <Link href="#" className="block px-2 py-1 text-black hover:bg-blue-600 hover:text-white rounded">
//               Media Room
//             </Link>
//             <Link href="#" className="block px-2 py-1 text-black hover:bg-blue-600 hover:text-white rounded">
//               Sustainability
//             </Link>
//             <Link href="" className="block px-2 py-1 text-black hover:bg-blue-600 hover:text-white rounded">
//               Contact Us
//             </Link>
//             <Link href="" className="block px-2 py-1 text-black hover:bg-blue-600 hover:text-white rounded">
//               Join Us
//             </Link>
//           </nav>
//         )}
//       </header>
//     </>
//   );
// };

// export default Header;



"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaUserCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen">
      {/* Top Contact Section */}
      <div className="fixed top-0 w-full z-30 bg-gray-200 p-2">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-4">
          <a href="tel:+917669005500" className="flex items-center space-x-2 bg-white py-1 px-3 rounded-md">
            <FaPhoneAlt color="#f27b21" />
            <span className="text-black">+91 76690 05500</span>
          </a>
          <a href="mailto:omgroup@omlogistics.co.in" className="flex items-center space-x-2 bg-white py-1 px-3 rounded-full">
            <FaEnvelope color="#f27b21" />
            <span className="text-black">omgroup@omlogistics.co.in</span>
          </a>
        </div>
      </div>

      {/* Header Section */}
      <header className={`fixed top-[40px] w-full z-20 bg-white shadow-md transition-transform duration-300 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-70'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Logo and Company Name */}
          <div className="flex items-center bg-white p-2 pr-4 space-x-3 rounded-lg py-4" style={{ marginLeft: "-100px" }}>
            <Image className='r' src="/omlogo.png" alt="Company Logo" width={50} height={50} />
            <span className="text-xl font-semibold">OM LOGISTICS LTD</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-gray-700" style={{ marginLeft: "80px" }}>
            <a href="#" className="hover:text-[#f27b21] font-semibold">About Us</a>
            <a href="#" className="hover:text-[#f27b21] font-semibold">What We Offer</a>
            <a href="#" className="hover:text-[#f27b21] font-semibold">Services</a>
            <a href="#" className="hover:text-[#f27b21] font-semibold">Retail Express</a>
            <a href="#" className="hover:text-[#f27b21] font-semibold">Media Room</a>
            <a href="#" className="hover:text-[#f27b21] font-semibold">Sustainability</a>
            <a href="#" className="hover:text-[#f27b21] font-semibold">Contact Us</a>
            <a href="#" className="hover:text-[#f27b21] font-semibold">Join Us</a>
          </nav>
          
          {/* Right-side icons */}
          <div className="flex space-x-4 items-center text-gray-700">
            
            <FaSearch className="hover:text-[#f27b21] text-black" />
            <FaBell className="hover:text-[#f27b21] text-black" />
            <FaUserCircle className="hover:text-[#f27b21] text-black" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative h-full w-full"
        style={{
          backgroundImage: `url('/bg3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-10  mt-16 text-white">
          <h1 className="text-5xl font-bold max-w-lg">
            OM LOGISTICS
          </h1>
          <p className="mt-4 text-lg max-w-md">
            With OM Logistics, there's always a new way to keep your goods moving and your business growing.
          </p>
          <button className="mt-6 px-5 py-3  bg-[#002D62] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#f27b21] text-white px-4 py-2 rounded">
            Discover new paths
          </button>

          {/* Tracking Box */}
          <div className="mt-2 bg-white p-6 mt-[-150px] rounded-lg shadow-md w-full max-w-md" style={{marginLeft:"950px"}}>
            <div className="text-black text-lg font-semibold mb-2">Tracking</div>
            <input
              type="text"
              placeholder="Enter B/L or container number"
              className="w-full p-2 mb-4 border rounded"
            />
            <button className="w-full bg-[#002D62] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-[#f27b21] text-white px-4 py-2 rounded">
              Track
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

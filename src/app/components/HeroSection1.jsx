
// import Image from 'next/image';

// export default function HeroSection1Elegant() {
//   return (
//     <div className="flex flex-col lg:flex-row bg-gray-100 p-6 lg:p-0">
//       {/* Left Image Section */}
//       <div className="lg:w-1/2 w-full relative">
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <Image
//           src="/omhero5.png"
//           alt="OM Logistics"
//           layout="responsive"
//           width={700}
//           height={775}
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>

//       {/* Right Text Section */}
//       <div className="lg:w-1/2 w-full flex flex-col justify-center bg-[#0a2351] text-white p-10">
//         <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg mb-6">
//           <h2 className="text-2xl font-semibold mb-4 text-yellow-300">About Us</h2>
//           <h3 className="text-4xl font-bold mb-4">Our Organisation</h3>
//           <p className="text-base mb-4">
//             OM Logistics, with more than three decades of expertise, proudly stands as the premier
//             supply chain and logistics management company in India. We have meticulously developed
//             a state-of-the-art infrastructure, committed to delivering unparalleled services to all
//             our stakeholders. Our core philosophy, “Making Business Simple,” drives us to provide
//             exceptional solutions.
//           </p>
//         </div>
//         <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
//           <h4 className="text-lg font-semibold mb-2 text-yellow-300">Our Mission Statement</h4>
//           <p className="text-sm text-white">Message From Our Managing Director's Desk</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';

export default function HeroSection1Elegant() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-6 lg:p-0">
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full relative group overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        <Image
          src="/omhero55.png"
          alt="OM Logistics"
          layout="responsive"
          width={700}
          height={775}
          objectFit="cover"
          className="rounded-lg transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Right Text Section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center bg-[#0a2351] text-white p-10">
        <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg mb-6 transform transition-transform duration-500 hover:scale-105 hover:bg-opacity-20 ease-out">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">About Us</h2>
          <h3 className="text-4xl font-bold mb-4">Our Organisation</h3>
          <p className="text-base mb-4">
            OM Logistics, with more than three decades of expertise, proudly stands as the premier
            supply chain and logistics management company in India. We have meticulously developed
            a state-of-the-art infrastructure, committed to delivering unparalleled services to all
            our stakeholders. Our core philosophy, “Making Business Simple,” drives us to provide
            exceptional solutions.
          </p>
        </div>
        <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:bg-opacity-20 ease-out">
          <h4 className="text-lg font-semibold mb-2 text-yellow-300">Our Mission Statement</h4>
          <p className="text-sm text-white">Message From Our Managing Director's Desk</p>
        </div>
      </div>
    </div>
  );
}

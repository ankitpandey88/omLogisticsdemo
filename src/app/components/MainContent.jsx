



// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Image from 'next/image';

// export default function  LastHeroSection() {
//   return (
//     <div className="flex flex-col items-center justify-center w-full py-16 bg-white">
//       {/* Title Section */}
//       <h2 className="text-blue-900 text-2xl font-bold mb-2">Our Strength</h2>
//       <p className="text-gray-600 text-center mb-8">
//         We are recognized for our expertise in streamlined supply chain and logistics services.
//         Our establishment specializes in delivering customer-centric solutions, standing as a trusted
//         companion on the path to success.
//       </p>

//       {/* Stats Section */}
//       <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-12 text-center">
//         <div>
//           <p className="text-4xl font-bold text-black">27,000+</p>
//           <p className="text-gray-600">Serviceable Pin Codes</p>
//         </div>
//         <div>
//           <p className="text-4xl font-bold text-black">25+</p>
//           <p className="text-gray-600">Million Sq.ft Warehouse Storage spaces</p>
//         </div>
//         <div>
//           <p className="text-4xl font-bold text-black">750+</p>
//           <p className="text-gray-600">Branches</p>
//         </div>
//         <div>
//           <p className="text-4xl font-bold text-black">2,500+</p>
//           <p className="text-gray-600">Scheduled Destination</p>
//         </div>
//         <div>
//           <p className="text-4xl font-bold text-black">50+</p>
//           <p className="text-gray-600">Cross Docks Center</p>
//         </div>
//         <div>
//           <p className="text-4xl font-bold text-black">6,000+</p>
//           <p className="text-gray-600">Closed Body Vehicles</p>
//         </div>
//       </div>

//       {/* Group of Companies Section */}
//       <h3 className="text-blue-900 text-2xl font-bold mb-6">Our Group of Companies</h3>
//       <div className="flex items-center justify-between w-full max-w-6xl">
//         {/* Left Arrow */}
//         <button className="text-gray-600 p-2">
//           <FaArrowLeft size={30} />
//         </button>

//         {/* Company Logos */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-grow mx-4">
//           {/* Example of using an Image component, replace with actual images as needed */}
//           <Image
//             src="/p1.png"
//             alt="Company 1"
//             width={150}
//             height={50}
//             className="rounded-lg"
//             objectFit="contain"
//           />
//           <Image
//             src="/p2.png"
//             alt="Company 2"
//             width={120}
//             height={40}
//             className="rounded-lg"
//             objectFit="contain"
//           />
//           <Image
//             src="/p3.png"
//             alt="Company 3"
//             width={150}
//             height={50}
//             className="rounded-lg"
//             objectFit="contain"
//           />
//           <Image
//             src="/p4.png"
//             alt="Company 4"
//             width={150}
//             height={50}
//             className="rounded-lg"
//             objectFit="contain"
//           />
//         </div>

//         {/* Right Arrow */}
//         <button className="text-gray-600 p-2">
//           <FaArrowRight size={30} />
//         </button>
//       </div>
//     </div>
//   );
// }
 "use client"

 import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

export default function LastHeroSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 bg-gradient-to-b from-gray-100 to-white">
      <h2 className="text-blue-900 text-2xl font-bold mb-2">Our Strength</h2>
      <p className="text-gray-600 text-center mb-8">
        We are recognized for our expertise in streamlined supply chain and logistics services. Our establishment specializes in delivering customer-centric solutions, standing as a trusted companion on the path to success.
      </p>

      {/* Stats Section with Shadow Animation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {[
          { label: 'Serviceable Pin Codes', value: '27,000+' },
          { label: 'Warehouse Storage Spaces', value: '25+ Million Sq.ft' },
          { label: 'Branches', value: '750+' },
          { label: 'Scheduled Destination', value: '2,500+' },
          { label: 'Cross Docks Center', value: '50+' },
          { label: 'Closed Body Vehicles', value: '6,000+' }
        ].map((item, index) => (
          <div key={index} className="p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105">
            <p className="text-4xl font-bold text-blue-900 mb-2">{item.value}</p>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Group of Companies Section */}
      <h3 className="text-blue-900 text-2xl font-bold mb-6">Our Group of Companies</h3>
      <div className="flex items-center justify-between w-full max-w-6xl">
        <button className="text-gray-600 p-2">
          <FaArrowLeft size={30} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-grow mx-4">
          <Image src="/p1.png" alt="Company 1" width={150} height={50} className="hover:rotate-3 transform transition-transform duration-300" objectFit="contain" />
          <Image src="/p2.png" alt="Company 2" width={120} height={40} className="hover:rotate-3 transform transition-transform duration-300" objectFit="contain" />
          <Image src="/p3.png" alt="Company 3" width={150} height={50} className="hover:rotate-3 transform transition-transform duration-300" objectFit="contain" />
          <Image src="/p4.png" alt="Company 4" width={150} height={50} className="hover:rotate-3 transform transition-transform duration-300" objectFit="contain" />
        </div>

        <button className="text-gray-600 p-2">
          <FaArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}


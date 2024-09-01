import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 bg-white">
      {/* Header */}
      <h3 className="text-gray-500 uppercase tracking-wider text-sm mb-2">What People Say</h3>
      <h2 className="text-blue-900 text-2xl font-bold mb-12">Testimonials</h2>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {/* Testimonial Card 1 */}
        <div className="relative p-8 rounded-lg shadow-lg bg-white hover:bg-blue-100 transition duration-300">
          <FaQuoteLeft className="text-gray-300 text-4xl absolute top-4 left-4" />
          <p className="text-gray-600 mt-8 mb-6">
            Very well organized operations, modern warehouses are very neat & clean. My heartiest
            congratulations to OM Team.
          </p>
          <p className="text-gray-700 font-semibold">Ms. Preeti Sadarangani</p>
        </div>

        {/* Testimonial Card 2 */}
        {/* <div className="relative p-8 rounded-lg shadow-lg bg-blue-100 hover:bg-blue-200 transition duration-300">
          <FaQuoteLeft className="text-gray-300 text-4xl absolute top-4 left-4" />
          <p className="text-white mt-8 mb-6">
            Very nice process and monitoring. Tracking of goods movement & OPS is commendable.
          </p>
          <p className="text-white font-semibold">Mr. Cui Yan</p>
        </div> */}

      <div className="relative p-8 rounded-lg shadow-lg bg-white hover:bg-blue-100 transition duration-300">
          <FaQuoteLeft className="text-gray-300 text-4xl absolute top-4 left-4" />
          <p className="text-gray-600 mt-8 mb-6">
            Very well organized operations, modern warehouses are very neat & clean. My heartiest
            congratulations to OM Team.
          </p>
          <p className="text-gray-700 font-semibold">Mr. Cui Yan</p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="relative p-8 rounded-lg shadow-lg bg-white hover:bg-blue-100 transition duration-300">
          <FaQuoteLeft className="text-gray-300 text-4xl absolute top-4 left-4" />
          <p className="text-gray-600 mt-8 mb-6">
            Good work done by the team. Keep it up.
          </p>
          <p className="text-gray-700 font-semibold">Mr. Ajay Gupta</p>
        </div>
      </div>
    </div>
  );
}




import { useRouter } from 'next/router';
import Image from 'next/image';

const imageDetails = {
  '/master9.png': { title: 'Main Image', description: 'This is the main image description.' },
  '/master10.jpeg': { title: 'Image 10', description: 'Description for image 10.' },
  '/master11.jpeg': { title: 'Image 11', description: 'Description for image 11.' },
  '/master12.jpeg': { title: 'Image 12', description: 'Description for image 12.' },
  '/master13.jpeg': { title: 'Image 13', description: 'Description for image 13.' },
  '/master14.jpeg': { title: 'Image 14', description: 'Description for image 14.' },
  '/master15.jpeg': { title: 'Image 15', description: 'Description for image 15.' },
  '/master5.jpeg': { title: 'Image 5', description: 'Description for image 5.' },
  '/master6.jpeg': { title: 'Image 6', description: 'Description for image 6.' },
};

const ImageDetails = () => {
  const router = useRouter();
  const { src } = router.query;
  const details = imageDetails[src];

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <Image
          src={src}
          alt={details.title}
          width={600}
          height={600}
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
        <h1 className="text-2xl font-bold mt-4">{details.title}</h1>
        <p className="mt-2">{details.description}</p>
        <div className="mt-4 flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Buy</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;

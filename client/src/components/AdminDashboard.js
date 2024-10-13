import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([
    {
      "_id": "60a7a12bc1dfb20f383e2b3a",
      "name": "John Doe",
      "socialMediaHandle": "@johndoe",
      "images": ["https://via.placeholder.com/300", "https://via.placeholder.com/300"]
    },
    {
      "_id": "60a7a12bc1dfb20f383e2b3b",
      "name": "Jane Doe",
      "socialMediaHandle": "@janedoe",
      "images": ["https://via.placeholder.com/300", "https://via.placeholder.com/300"]
    }
  ]);

  const [selectedImage, setSelectedImage] = useState(null); // For modal image
  const [isModalOpen, setIsModalOpen] = useState(false); // To track modal state

  // Fetch user submissions from backend
  const fetchSubmissions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/user/submissions');
      const data = await response.json();
      setSubmissions(data); // Update state with fetched submissions
      console.log(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  // Fetch submissions on component mount
  useEffect(() => {
    fetchSubmissions();
  }, []);

  // Group submissions by user (name)
  const groupedSubmissions = submissions.reduce((acc, submission) => {
    const { name, socialMediaHandle, images } = submission;

    // If the user already exists in the accumulator, append images
    if (acc[name]) {
      acc[name].images.push(...images);
    } else {
      acc[name] = { name, socialMediaHandle, images: [...images] };
    }

    return acc;
  }, {});

  // Convert the grouped object into an array
  const groupedSubmissionsArray = Object.values(groupedSubmissions);

  // Function to handle image click and open modal
  const openModal = (img) => {
    setSelectedImage(img);
    console.log("clicked");
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Admin Dashboard
      </h1>

      {/* Display submissions or a message if no submissions exist */}
      {groupedSubmissionsArray.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedSubmissionsArray.map((submission) => (
            <div
              key={submission.name}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out duration-300"
            >
              {/* User Name and Social Media Handle */}
              <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-200">
                <h2 className=" font-semibold text-gray-800 mb-2">
               User Name:- <span className=' uppercase'>{submission.name}</span> 
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  <span className="font-medium">Social Media:</span>{" "}
                  {submission.socialMediaHandle}
                </p>
              </div>

              {/* Images (Thumbnails) */}
              <div className="px-6 py-4 bg-gray-100">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Uploaded Images
                </h3>
                <div className="flex flex-wrap gap-4">
                  {submission.images.map((img, index) => (
                    <div
                      key={index}
                      className="w-36 h-36 relative overflow-hidden rounded-lg border-2 border-gray-300 hover:border-gray-500 transform transition-transform duration-200 ease-in-out"
                      onClick={() => {
                        setSelectedImage(img);
                        setIsModalOpen(true);

                      }}
                   >
                      {/* Image as Thumbnail */}
                      <img
                        src={img}
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
                    
                      />
                      {/* Optional hover effect: add border and shadow on hover */}
                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity ease-in-out duration-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500 mt-10">
          No user submissions available.
        </p>
      )}

      {/* Modal for displaying full-size image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-4xl relative">
            <button
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-900"
              onClick={closeModal}
            >
              <span className="text-3xl font-bold">&times;</span>
            </button>
            <img
              src={selectedImage}
              alt="Full-size"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

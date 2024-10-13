import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      socialMediaHandle,
      images, // Base64 encoded images
    };

    try {
      const response = await fetch('http://localhost:5000/api/user/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        alert('User submitted successfully!');
        // Clear the form fields
        setName('');
        setSocialMediaHandle('');
        setImages([]);
        setImagePreviews([]);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Convert file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle file selection and convert to Base64
  const handleFileChange = async (event) => {
    const files = event.target.files;
    const base64Images = [];
    const previews = [];

    // Convert each file to Base64
    for (let i = 0; i < files.length; i++) {
      const base64 = await convertToBase64(files[i]);
      base64Images.push(base64);
      previews.push(URL.createObjectURL(files[i])); // For preview purposes
    }

    setImages(base64Images); // Set Base64 encoded images
    setImagePreviews(previews); // Set image previews
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-3xl">
  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Submit Your Details</h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Name Input */}
    <div className="flex flex-col space-y-2">
      <label htmlFor="name" className="text-lg font-medium text-gray-700">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300"
      />
    </div>

    {/* Social Media Input */}
    <div className="flex flex-col space-y-2">
      <label htmlFor="socialMediaHandle" className="text-lg font-medium text-gray-700">Social Media:</label>
      <input
        type="text"
        id="socialMediaHandle"
        value={socialMediaHandle}
        onChange={(e) => setSocialMediaHandle(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300"
      />
    </div>

    {/* Image Selection */}
    <div className="flex flex-col space-y-2">
      <label htmlFor="images" className="text-lg font-medium text-gray-700">Select Images (Multiple):</label>
      <input
        type="file"
        id="images"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        required
        className="file:px-4 file:py-2 file:border file:border-gray-300 file:rounded-lg file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ease-in-out duration-300"
      />
    </div>

    {/* Preview Section */}
    {imagePreviews.length > 0 && (
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Preview</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index + 1}`}
              className="w-24 h-24 object-cover rounded-lg border-2 border-indigo-500 shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    )}

    {/* Submit Button */}
    <div className="mt-6 text-center">
      <button
        type="submit"
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition ease-in-out duration-300 transform hover:scale-105"
      >
        Submit
      </button>
    </div>
  </form>
</div>

  );
};

export default UserForm;

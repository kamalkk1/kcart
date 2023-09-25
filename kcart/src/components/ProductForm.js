import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    price: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function with the form data
    onSubmit(formData);
    // Clear the form after submission
    setFormData({
      title: '',
      image: '',
      description: '',
      price: '',
    });

    setIsFormVisible(false);
  };

  return (
    <>
    <button onClick={() => setIsFormVisible(!isFormVisible)}>Toggle Modal</button>
    {isFormVisible && (
    <div className="modal fixed inset-0 z-50 ">
 <div className="modal-content bg-white mx-auto mt-20 p-4 rounded-lg w-3/4">
  <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="title" className="block font-semibold">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full border rounded px-3 py-2 mt-1"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="image" className="block font-semibold">Image URL:</label>
      <input
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
        required
        className="w-full border rounded px-3 py-2 mt-1"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block font-semibold">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full border rounded px-3 py-2 mt-1"
      ></textarea>
    </div>
    <div className="mb-4">
      <label htmlFor="price" className="block font-semibold">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-full border rounded px-3 py-2 mt-1"
      />
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      Add Product
    </button>
  </form>
      </div>
      
    </div>
    )}
    </>
  );
};

export default ProductForm;

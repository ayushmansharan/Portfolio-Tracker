import React, { useState } from "react";

const StockForm = ({ onAddStock }) => {
  const [formData, setFormData] = useState({
    name: "",
    ticker: "",
    quantity: "",
    buyPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStock(formData);
    setFormData({ name: "", ticker: "", quantity: "", buyPrice: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-md mb-6"
    >
      <h3 className="text-xl font-bold mb-4">Add New Stock</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Stock Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ticker
        </label>
        <input
          type="text"
          name="ticker"
          value={formData.ticker}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Buy Price
        </label>
        <input
          type="number"
          name="buyPrice"
          value={formData.buyPrice}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Add Stock
      </button>
    </form>
  );
};

export default StockForm;

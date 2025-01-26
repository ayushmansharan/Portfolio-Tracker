import React from "react";

const StockTable = ({ stocks, onDeleteStock }) => {
  return (
    <table className="min-w-full bg-white rounded-lg shadow-md">
      <thead>
        <tr className="bg-gray-100 text-left text-sm uppercase font-medium text-gray-700">
          <th className="py-3 px-4">Stock Name</th>
          <th className="py-3 px-4">Ticker</th>
          <th className="py-3 px-4">Quantity</th>
          <th className="py-3 px-4">Buy Price</th>
          <th className="py-3 px-4">Total Value</th>
          <th className="py-3 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock, index) => (
          <tr key={index}>
            <td className="py-2 px-4">{stock.name}</td>
            <td className="py-2 px-4">{stock.ticker}</td>
            <td className="py-2 px-4">{stock.quantity}</td>
            <td className="py-2 px-4">${stock.buyPrice}</td>
            <td className="py-2 px-4">
              ${(stock.quantity * stock.buyPrice).toFixed(2)}
            </td>
            <td className="py-2 px-4">
              <button
                onClick={() => onDeleteStock(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;

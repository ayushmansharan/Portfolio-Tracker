import React from "react";

const Dashboard = ({ stocks }) => {
  const totalValue = stocks.reduce(
    (total, stock) => total + stock.quantity * stock.buyPrice,
    0
  );

  const topStock =
    stocks.length > 0
      ? stocks.reduce((prev, current) =>
          prev.buyPrice > current.buyPrice ? prev : current
        )
      : null;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Portfolio Dashboard</h2>
      <p className="text-lg font-medium">
        <span className="font-semibold">Total Portfolio Value:</span> $
        {totalValue.toFixed(2)}
      </p>
      {topStock && (
        <p className="text-lg font-medium">
          <span className="font-semibold">Top-Performing Stock:</span>{" "}
          {topStock.name} (${topStock.buyPrice})
        </p>
      )}
    </div>
  );
};

export default Dashboard;

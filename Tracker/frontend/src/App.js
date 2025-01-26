import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  // Assuming you have some styles

// AddStock Component (To send data to the backend)
const AddStock = () => {
    const [name, setName] = useState('');
    const [ticker, setTicker] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newStock = {
            name,
            ticker,
            quantity,
        };

        try {
            // Make the POST request to the backend API
            const response = await axios.post('http://localhost:8080/api/stocks', newStock);

            // On success, set a message or update the state
            setMessage('Stock added successfully!');
            console.log('Stock added successfully:', response.data);
        } catch (error) {
            console.error('Error adding stock:', error);
            setMessage('Error adding stock. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add New Stock</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Stock Name:</label>
                    <input 
                        type="text" 
                        placeholder="Enter Stock Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Ticker:</label>
                    <input 
                        type="text" 
                        placeholder="Enter Stock Ticker" 
                        value={ticker} 
                        onChange={(e) => setTicker(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input 
                        type="number" 
                        placeholder="Enter Stock Quantity" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Number(e.target.value))} 
                    />
                </div>
                <button type="submit">Add Stock</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

// App Component (Main Entry)
function App() {
    return (
        <div className="App">
            <h1>Stock Portfolio Tracker</h1>
            <AddStock />
        </div>
    );
}

export default App;

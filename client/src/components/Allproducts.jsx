import React, { useState, useEffect } from 'react';
import Card from './Card';
function Allproducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  // Define an async function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/products/allProducts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); // Empty dependency array means this effect runs once on mount

// Your component rendering logic here
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;

return (
  <div className="card-container flex flex-wrap justify-center gap-4 p-4">
      {data.map((item, index) => (
        <Card {...item}/>
      ))}
    </div>
);
}

// function Allproducts() {
//   return (
//     <div>Allproducts</div>
//   )
// }

export default Allproducts
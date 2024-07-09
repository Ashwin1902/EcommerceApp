import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useParams } from 'react-router';
function Product() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {id}=useParams();
useEffect(() => {
  // Define an async function to fetch data
  const fetchData = async () => {
    try {
      
      const response = await fetch(`http://localhost:5000/products/${id}`);
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
  const props={...data};
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <img className="w-80 rounded-lg shadow-lg h-80" src={props.image[0]} alt={data.name} />
        </div>
        {/* Product Details */}
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold text-gray-900">{props.title}</h1>
          <p className="mt-4 text-gray-600">{props.description}</p>
          <p className="mt-4 text-xl font-semibold text-gray-900">${props.price}</p>
          <div className="mt-6">
            <button className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow">
              Add to Cart
            </button>
            <button className="w-full mt-4 px-4 py-2 text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 rounded-lg shadow">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Product
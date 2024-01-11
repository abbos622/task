"use client"
import React, { useEffect, useState } from 'react';
const fetchData = async (params) => {

  
  console.log(params.id);
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await response.json();
  return data;

};

const SingleProduct = ({params}) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await fetchData(params);
      setResult(productsData);
    };

    fetchProducts();
  }, []);

  console.log(result);
  return (
    // <></>
    <div>
      <div className="cards">
            <div className='card'>
              <img width={500} height={400} src={result?.images[0]} alt="" />
              <h2>{result?.title.length > 5 ? result?.title.slice(0, 5) + "..." : result?.title}</h2>
              <p>{result?.description}</p>
            </div>
      </div>
      </div>
  );
};

export default SingleProduct;




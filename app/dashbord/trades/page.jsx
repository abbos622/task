"use client"
import React, { useEffect, useState } from 'react';
import "./Trades.css"
import Link from 'next/link';

const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data;
};

const Trades = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await fetchData();
      setResult(productsData);
    };

    fetchProducts();
  }, []);

  // console.log(result);
  return (
    // <></>
    <div>
      <div className="cards">
        {
          result.products?.map(data => 
            <Link key={data.id} href={`trades/${data.id}`} className='card'>
              <img width={50} height={40} src={data.images[0]} alt="" />
              <h2>{data.title.length > 5 ? data.title.slice(0, 5) + "..." : data.title}</h2>
            </Link>
            )
        }
      </div>
      </div>
  );
};

export default Trades;

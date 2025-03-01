import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="px-10 py-16">
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-blue-400 rounded p-5">
            <img src={product.image} alt="" />
            <Link href={`/tamrin1/view1/${product.id}`} className='text-blue-400 font-bold'>{product.title}</Link>
            <p className="whitespace-break-spaces">{product.description}</p>
            <h3>price : {product.price} $</h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default index;

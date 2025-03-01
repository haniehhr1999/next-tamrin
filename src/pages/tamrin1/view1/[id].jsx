import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SingleProduct = () => {
  const router = useRouter();
  console.log("router =>", router);

  const id = router.query.id

  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => {
            setProduct(json)
            console.log(json)
        });
    }
  }, [id]);

  const goBack = ()=>{
    router.back()
  }

  return <div className="md:px-16 md:py-10">
    <div className="grid grid-cols-5 gap-8 border border-red-700 rounded-lg p-8">
    <div>
        <img src={product.image} alt="" />
    </div>
    <div className="col-span-4">
        <h1 className="text-red-500 text-3xl mb-4">{product.title}</h1>
        <p className="mb-4">
            {product.description}
        </p>

        <h5 className="text-green-600">
        price : {product.price} $
        </h5>

        <h5 className="text-blue-400">
        category : {product.category}
        </h5>
    </div>
  </div>

  <button className="bg-red-700 text-white rounded px-4 py-2 my-3 cursor-pointer" onClick={goBack}>go back</button>
  </div>;
};

export default SingleProduct;

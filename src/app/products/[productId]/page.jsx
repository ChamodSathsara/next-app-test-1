import { notFound } from "next/navigation";
import React from "react";

async function ProductDetails({ params }) {
  const productId = (await params).productId;

  if (parseInt(productId) > 100) {
    notFound();
  }

  return <div>ProductDetails of id number {productId}</div>;
}

export default ProductDetails;

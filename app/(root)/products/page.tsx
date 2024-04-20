import ProductList from "@/components/ProductList";
import React from "react";

export default function Products()  {
  return (
    <div className="pt-10">
      <ProductList />
    </div>
  );
};

export const dynamic = "force-dynamic";

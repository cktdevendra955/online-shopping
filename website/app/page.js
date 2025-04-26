import Image from "next/image";
import ProductUI from "./__componets/product/ProductUI";

export default function Home() {
  return (
    <>
  
 
    <div className="py-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductUI />
        <ProductUI />
        <ProductUI />
        <ProductUI />
      </div>    
    </div> 
    </>
  );
}

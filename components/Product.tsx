import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { addToBasket } from "../redux/basketSlice";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

/*
Redux
  https://redux.js.org/
  Redux : is a state mangement libary , it allows u to mange state
  between component
 */

function Product({ product }: Props) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(<strong>{product.title} added to basket</strong>, {
      position: "bottom-center",
    });
  };

  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#ffffff] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className=" flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-black md:text-2xl">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>

        <div
          className="flex h-15 w-15 flex-shrink-0 cursor-pointer items-center justify-center  rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 md:h-[55px] md:w-[55px]
         "
          onClick={addItemToBasket}
        >
          <ShoppingBagIcon className="h-8 w-8 text-black" />
        </div>
      </div>
    </div>
  );
}

export default Product;

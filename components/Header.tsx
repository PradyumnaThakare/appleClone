import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";

/**
 * In Header Function
 * 
 * ---Conatiner Header---
  (Styling header)
  -postion : sticky
  -top=0
  -z index=30
  -We want to give custom background colour to the header
  bg-[]=backgroung and we give the calues in [] brackets
  []= we will give color and some padding

 * ----Container OuterDiv---
 * -flex/-justify-center/items-center
 * -Responsive breakpints : md->medium,sm->small ,lg->large
 * -Here we are making it "md" therefore its mobile resposive first and then it goes to bigger screen sizes
 * -we are taking it width=1/5
 * -logo=20%
 * -nav=80%
 * 
 * 
 *  ----Container lINK---
 * -it will take u to the homepage
 * -it should have only one child (Here its div)
 * -it preloads the page(home) and dilvers it super fast
 * 
 * ---Container InnerDiv---
 * Task1 : To Add apple logo
 * 1><Image> =Tag is used / (Layout="fill")=surrounds image tag with container div  /(objectFit="Contain")=mantians aspect ratio
 * -Now we have to resize the image
 * -When ever we use surrounding div and layout="fill" we have to use "relative"
 * with relative we jave to give height and with
 * Give cursor pointer --> because it needs to go back to Homepage
 * opacity and then transition :So we have reduced the opacity of image to 35 so when we hover on it then it translate to opacity of 100 

  ---Container Navigation div----
  -4 anchor links 
  -By default its hidden
  -Only on medium screen size it will show flex
  -So when your screen gets to the samller size the 4 tags get hidden
  -Go to global.css file and make changes t0 headerLink
  

  ---Container Icon div--
  -Using heroicons
  -Import icons
  -Add search

  --Add ShoppingBag
  - -right-1 => means right=-1 , more on the negative
  - z index= 50 , top of every thing
  - flex put height -4 , w-4
  -rounded-full : boundry radius
  -Add Background Gradient
    - bg-gradient-to-r ==> meaning from left ot right would be the colour gradient

  --User Icon
  

*/

function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <header className="sticky top-0 z-30 flex w-full  items-center justify-between bg-[#E7ECEE] p-4">
      <div className=" flex items-center justify-center  md:w-1/5 ">
        <Link href="/">
          <div className="relative  opacity-40 w-5 h-10 cursor-pointer transition hover:opacity-100">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a
          href="/#buyscreen"
          className=" cursor-pointer opacity-50 transition hover:opacity-100 "
        >
          <strong>Product</strong>
        </a>
        <a
          href="/#buyscreen"
          className="cursor-pointer opacity-50 transition hover:opacity-100"
        >
          <strong> Explore</strong>
        </a>
        <a className="cursor-pointer opacity-50 transition hover:opacity-100">
          <b> Support</b>
        </a>
        <a className="cursor-pointer opacity-50 transition hover:opacity-100">
          <b> Business</b>
        </a>
      </div>

      <div className="flex justify-center items-center space-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer opacity-50 transition hover:opacity-100" />

        <Link href="/checkout">
          <div className="relative cursor-pointer ">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="h-6 w-6 cursor-pointer opacity-50 transition hover:opacity-100"></ShoppingBagIcon>
          </div>
        </Link>

        {session ? (
          //If session==true it would show us the user's google login image
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          //Or else if the session if false it would show are userIcon image
          <UserIcon
            className="h-6 w-6 cursor-pointer opacity-50 transition hover:opacity-100"
            onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
}

export default Header;

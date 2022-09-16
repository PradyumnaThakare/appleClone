import React from "react";
import Image from "next/image";
import Button from "./Button";
/*  ---Creating of landing plag---
      
        --Span Tag--
      - display of text would be blog (display=blog)
      -do bg-gradient from left to right (pink to voilent)
      - bg-clip-text and text-transparent : will make the bg-gradient available
        only to the text part and not the rest

        --H1 tag--
       * space-y-3 : making space downwards as there are 3 text
       * font :font-semibold
       * tracking-wide: spacing between the letters
       * text size= 5xl
       * lg:text-6xl ==> when screen is large the text size should increase 
       * xl:text-8xl ==>making xl even bigger
       
        --divTag--
        * the space of div tag make y-8

        --section tag--
        * dislplay = sticky
        * mx ==> is margin left and right make it auto
        * flex
        * max width : would be 1350px
        * px :make  padding of left and right as 
        * 
        
        ---Div Tag---
        *button tag

       
*/

function Landing() {
  return (
    <section
      className=" sticky top-0  mx-auto  h-screen max-w-[1350px]  flex items-center px-8
     justify-between"
    >
      <div className="space-y-8 ">
        <h1
          className="space-y-3  text-5xl font-semibold tracking-wide lg:text-6xl
          xl:text-8xl  "
        >
          <span
            className="block bg-gradient-to-r from-pink-500 to-violet-400
             bg-clip-text text-transparent"
          >
            Powered
          </span>
          <span className="block ">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className=" space-x-12">
          {/* We are sending the string Bye Now to Button.txs */}
          <Button title="Buy Now" />
          {/*
                  Link Button 
                  Display:realtive ,cursor Pointer ,text : large, font :medium
 
                  -before:absolute  {basically means imaginary div}
                  -inset-x-0:means from left and right it would be zero
                  - -bottom-1.5 means we want ot negative
                  - origin-left:start from left
                  -scale-x : scaling it to zero

*/}
          <a
            href="#_"
            className="relative cursor-pointer  font-medium
           before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5
           before:origin-left before:scale-x-0 before:transform
           before:rounded-bl before:bg-black before:transition-all before:duration-200
           hover:before:scale-x-100 text-2xl"
          >
            <strong> Learn More</strong>
          </a>
        </div>
      </div>

      {/**
       * This continer would imclude the big iphone picture
       *layoud ==>fill
         - object must be contian , maintiaing the acpect ratio --> onjectFit="contian"

         --Div Tag---
         *image would be hidden on moble screen --> relative hidden
         *height and width 450
         *transaction -->all
         * duration must be 500
         * medium breakpoint : md == image would be inline
         * large break point : lg == image would be hieght 650px wiidth 600px
         * When image is in public folder we dont need to add its path just /image.png
       */}
      <div
        className="relative hidden h-[650px] w-[500px] translate-all md:inline 
      lg:h-[850px] lg:w-[800px]"
      >
        <Image src="/iphone.png" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
}

export default Landing;

import type { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { Tab } from "@headlessui/react";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import Product from "../components/Product";
import Basket from "../components/Basket";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}
/* Headless  tailwind css*/

/**
 * 1> <Header/> :Importing the header file from components(Header.tsx)
 * -IN next.config.js we are adding the images domain
 * 2>Now we have to resize the image
 */

const Home = ({ categories, products }: Props) => {
  console.log(categories);

  /*
      -We have a function called as show products in which by function call we are sending a number
      -Then it takes in the category number in it
      -we have bunch of category of product(4) which are matchted by the category that we send
      -Then it retures all the products taht belong to that category

   */
  const showProducts = (category: number) => {
    /* Filter function() --> it takes in the value of the product  and return a contidion that would match the category*/
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />); //It will filter the products by category
  };

  return (
    <div className="">
      <Head>
        <title>Apple</title>
        <link rel="icon" href="https://rb.gy/vsvv2o" sizes="2px" />
      </Head>

      <Header />

      <Basket />

      {/**The comand in the className sloves our image problem merges the image background with website bcakground */}
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>

      {/**The sider thing to buy stuff
       * The main think is making the home page sticky
       */}
      <section
        id="buyscreen"
        className="relative z-40 -mt-[100vh] min-h-screen bg-black"
      >
        <div className=" space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            Products
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center ">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5  font-bold  text-lg outline-none md:py-5 md:px-14 md:text-base ${
                      selected
                        ? "borderGradient bg-[#35383C] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                    }`
                  }
                >
                  <strong>{category.title}</strong>
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;

//Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      categories,
      products,
      session,
    },
  };
};

/*
https://applestorein.sanity.studio/
 */

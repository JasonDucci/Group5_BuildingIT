import React from "react";
import Layout from "./../Layout/Layout";
import Head from "../Components/Head";

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Website
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  
Welcome to Emree, a digital haven that transcends time and space, inviting you to embark on an extraordinary journey through the corridors of history, culture, and art. Emree is not just a museum; it's a virtual sanctuary where the past comes alive, and the present is enriched by the beauty of human creativity.
                </p>
                <p>
                Our mission at Emree is to curate a diverse collection that celebrates the richness of global heritage. From ancient civilizations to contemporary masterpieces, we strive to connect visitors with the profound stories and artistic expressions that shape our world. Immerse yourself in captivating exhibits that span epochs and continents, offering a panoramic view of humanity's collective narrative.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg ">
                  <span className="text-3xl block font-extrabold">100 ++</span>
                  <h4 className="text-lg font-semibold my-2">Listed Arts</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Welcome to our Website. Welcome to our Website.
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg ">
                  <span className="text-3xl block font-extrabold">5 ++</span>
                  <h4 className="text-lg font-semibold my-2">Special Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Enjoy new art experience
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/head.jpg"
              alt="aboutus"
              className="w-full xl:block h-header rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;

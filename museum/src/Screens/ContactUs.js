import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

function ContactUs() {
  const ContactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Get the updatest information and ask question",
      icon: FiMail,
      contact: "rmitvn@rmit.edu.vn",
    },
    {
      id: 2,
      title: "Call Us",
      info: "If you have any questions",
      icon: FiPhoneCall,
      contact: "024 3726 1460",
    },
    {
      id: 3,
      title: "Location",
      info: " Handi Resco Building, 521 P. Kim Ma, Ngoc Khanh, Ba Dinh, Ha Noi",
      icon: FiMapPin,
      contact: "",
    },
  ];
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3  xl:gap-8">
          {ContactData.map((item) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-10 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                <item.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-sm text-text leading-7">
                <a href={`mailto:{item.contact}`} className="text-rose-600">
                  {item.contact}
                </a>{" "}
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;

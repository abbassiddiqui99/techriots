"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";

const servicesConstant = [
  {
    label: "AI/ML",
    icon: <PiShoppingCartLight />,
    bgImage: "https://placekitten.com/1400",
    title: "Artificial Intelligence & Machine Learning",
    content:
      "Our AI/ML Consulting and Development Services will boost your business pipeline to elevate the efficiency of the key functions using Business Intelligence.",
    cardContent: [
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Deep Learning",
      },
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Predictive Analysis",
      },
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Natural Language",
      },
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Computer Vision",
      },
    ],
    exploreMorHref: "#",
  },
  {
    label: "Odoo",
    icon: <PiShoppingCartLight />,
    bgImage: "https://placekitten.com/1500",
    title: "Odoo",
    content:
      "We have a team of highly trained Odoo specialists who help us build, deploy, and design ERP systems that assist our customers.",
    cardContent: [
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Odoo Customization",
      },
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Odoo Implementation",
      },
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Odoo Integration",
      },
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Odoo Migration",
      },
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Odoo Support",
      },
      {
        icon: <PiShoppingCartLight size="35px" />,
        label: "Odoo Consultancy",
      },
    ],
  },
  {
    label: "Big Data",
    icon: <PiShoppingCartLight />,
    bgImage: "https://placekitten.com/1300",
  },
  {
    label: "DevOps",
    icon: <PiShoppingCartLight />,
    bgImage: "https://placekitten.com/1200",
  },
  {
    label: "Java",
    icon: <PiShoppingCartLight />,
    bgImage: "https://placekitten.com/1100",
  },
  {
    label: "AI/ML2",
    icon: <PiShoppingCartLight />,
    bgImage: "https://placekitten.com/1600",
  },
  {
    label: "Odoo2",
    icon: <PiShoppingCartLight />,
    bgImage: "https://placekitten.com/1600",
  },
];

const ServiceSection = () => {
  const [selectedService, setSelectedService] = React.useState(
    servicesConstant[0]
  );
  const backGroundImage =
    selectedService?.bgImage || servicesConstant[0]?.bgImage;
  return (
    <div className="bg-black/5 mb-16">
      <div className="flex justify-center items-center mx-auto container px-32 py-16">
        <div className="w-full flex">
          <div className="flex-auto flex flex-col w-5/12 bg-white rounded-l-3xl p-6">
            <div className="capitalize text-md font-semibold text-red-600">
              Our Services
            </div>
            <div className="text-3xl font-bold mt-4 mb-2">
              Uncover the Power of Advanced Technologies with Us!.
            </div>
            <div className="text-sm font-semibold text-gray-500">
              Uncover the Power of Advanced Technologies with Us!.
            </div>
            <div className="flex-1 flex mt-4 flex-col">
              {servicesConstant?.map((item) => (
                <div
                  key={item.label}
                  onClick={() => setSelectedService(item)}
                  className={clsx(
                    "cursor-pointer py-2 px-8 hover:border-l-4 border-red-500 font-semibold text-gray-500/50 flex items-center gap-2 hover:text-red-500 hover:font-semibold hover:bg-red-500/25",
                    selectedService?.label === item?.label &&
                      "border-l-4 border-red-500 !text-red-500 font-semibold bg-red-500/25"
                  )}
                >
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>
          <div
            className={`flex-auto w-8/12 rounded-r-3xl bg-cover bg-center min-h-[600px] duration-500 ease-in-out`}
            style={{ backgroundImage: "url(" + backGroundImage + ")" }}
          >
            <div className="w-full h-full rounded-r-3xl flex p-16 justify-between backdrop-brightness-[0.2] text-white flex-col">
              <div className="flex flex-col gap-6">
                <div className="text-3xl font-bold">
                  {selectedService?.title}
                </div>
                <div>{selectedService?.content}</div>
                <div className="flex flex-wrap gap-4">
                  {selectedService?.cardContent?.map((service) => {
                    const brCardTitle = service?.label.split(" ");
                    return (
                      <div
                        key={service.label}
                        className="bg-white flex gap-2 items-center text-black w-fit p-4 rounded-md"
                      >
                        <div className="text-red-500 mr-2">{service?.icon}</div>
                        {brCardTitle?.map((item) => (
                          <React.Fragment key={`br_${item}`}>
                            {item}
                            <br />
                          </React.Fragment>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Link
                href={selectedService?.exploreMorHref || "#"}
                className="flex gap-2 items-center"
              >
                Explore More <PiShoppingCartLight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

import React from "react";
import Link from "next/link";

const footerLinks = [
  {
    heading: "The Craftly Shop",
    links: [
      {
        text: "About us",
        src: "/",
      },
      {
        text: "Contact us",
        src: "/",
      },
      {
        text: "Contact",
        src: "/",
      },
      {
        text: "chat On Whatsapp",
        src: "/",
      },
    ],
  },
  {
    heading: "Services",
    links: [
      {
        text: "Track shipment",
        src: "/",
      },
      {
        text: "Contact",
        src: "/",
      },
      {
        text: "login",
        src: "/auth/login",
      },
      {
        text: "Join us",
        src: "/auth/register",
      },
    ],
  },
  {
    heading: "Legal",
    links: [
      {
        text: "Return Policy",
        src: "/return-policy",
      },
      {
        text: "Shipping Policy",
        src: "/shipping-policy",
      },
      {
        text: "Privacy & Policy",
        src: "privacy-policy",
      },
      {
        text: "Terms And Condition",
        src: "/terms-condition",
      },
    ],
  },
  {
    heading: "Contact Information",
    links: [
      {
        text: "Address :- Hasanpur",
        src: "/",
      },
      {
        text: "Murshidabad, West Bengal",
        src: "/",
      },
      {
        text: "India , 742302",
        src: "/",
      },
      {
        text: "+91 85038 85083",
        src: "/",
        class: "underline",
      },
      {
        text: "thecraftlyshop@gmail.com",
        src: "mailto:thecraftlyshop@gmail.com",
        class: "underline",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="py-12 mt-24 px-4 bg-gray-300">
      <div className="container mx-auto">
        <div className="grid lg:place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {footerLinks.map((footer, index) => {
            return (
              <>
                <ul key={index}>
                  <li className="font-bold mb-3">{footer.heading}</li>
                  {footer.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className={`text-sm block pb-1 mb-1 w-max ${
                            link.class && link.class
                          }`}
                          href={link.src}
                        >
                          {link.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
        <h3 className="font-semibold mt-16 sm:text-xl">
          Devloped By{" "}
          <a
            href="https://www.linkedin.com/in/animesh-kumbhakar"
            target="_blank"
            className="text-rose-500"
          >
            Animesh Kumbhakar{" "}
          </a>
          with ❤️
        </h3>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  let [modal, setModal] = useState(false);
  return (
    <div>
      <div
        className={`fixed w-[450px]  bg-white left-[50%] translate-x-[-50%] top-[-1000px] translate-y-[-50%] border-1 ${modal ? `top-[50%]` : `top-[-1000px]`}`}
      >
        <form action="https://fabform.io/f/xxxxx" method="post">
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-600 text-4xl font-semibold mb-8 relative">
              Enquire Now {""}
              <button
              type="button"
                onClick={() => setModal(false)}
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
              >
                <IoCloseSharp />
              </button>{" "}
              {""}
            </h2>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full h-12 mb-6 px-4 rounded-full border border-gray-200 focus:outline-none"
              required=""
            />
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-12 mb-6 px-4 rounded-full border border-gray-200 focus:outline-none"
              required=""
            />
            {/* Phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full h-12 mb-6 px-4 rounded-full border border-gray-200 focus:outline-none"
            />
            {/* Preferred Contact */}
            <div className="mb-6">
              <p className="text-gray-500 mb-2">Preferred method:</p>
              <label className="mr-4">
                <input
                  type="radio"
                  name="contact_method"
                  defaultValue="email"
                />{" "}
                Email
              </label>
              <label>
                <input
                  type="radio"
                  name="contact_method"
                  defaultValue="phone"
                />{" "}
                Phone
              </label>
            </div>
            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-24 mb-6 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none"
              required=""
              defaultValue={""}
            />
            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 bg-indigo-600 text-white rounded-full hover:bg-indigo-800 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <>
        {/* Hello world */}
        <nav className="bg-neutral-primary  w-full z-20 top-0 start-0 border-b border-default">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-7"
                alt="Flowbite Logo"q
                
              />
              <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <button
                    onClick={() => setModal(true)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Enquire Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

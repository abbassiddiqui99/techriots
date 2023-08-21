"use client";
import { Disclosure } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";

export default function index() {
  return (
    <div className="w-full">
      <div className="w-full rounded-2xl bg-white p-2">
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-xl font-medium border-b">
                <span className="">Why should I move to ReactJS?</span>
                <BsChevronUp
                  className={`${
                    open ? "rotate-0 transform " : ""
                  } h-5 w-5 text-black rotate-180 transition duration-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                The major advantage of using ReactJS in web development is that
                it is fast, reliable, secure, and scalable. ReactJS also lets
                the web developers to develop web applications that can change
                your data without any sort of reloading.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-xl font-medium border-b">
                <span className="">Why should I move to ReactJS?</span>
                <BsChevronUp
                  className={`${
                    open ? "rotate-0 transform" : ""
                  } h-5 w-5 text-black rotate-180 transition duration-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                The major advantage of using ReactJS in web development is that
                it is fast, reliable, secure, and scalable. ReactJS also lets
                the web developers to develop web applications that can change
                your data without any sort of reloading.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-xl font-medium border-b">
                <span className="">Why should I move to ReactJS?</span>
                <BsChevronUp
                  className={`${
                    open ? "rotate-0 transform " : ""
                  } h-5 w-5 text-black rotate-180 transition duration-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                The major advantage of using ReactJS in web development is that
                it is fast, reliable, secure, and scalable. ReactJS also lets
                the web developers to develop web applications that can change
                your data without any sort of reloading.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-xl font-medium border-b">
                <span className="">Why should I move to ReactJS?</span>
                <BsChevronUp
                  className={`${
                    open ? "rotate-0 transform " : ""
                  } h-5 w-5 text-black rotate-180 transition duration-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                The major advantage of using ReactJS in web development is that
                it is fast, reliable, secure, and scalable. ReactJS also lets
                the web developers to develop web applications that can change
                your data without any sort of reloading.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-xl font-medium border-b">
                <span className="">Why should I move to ReactJS?</span>
                <BsChevronUp
                  className={`${
                    open ? "rotate-0 transform " : ""
                  } h-5 w-5 text-black rotate-180 transition duration-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                The major advantage of using ReactJS in web development is that
                it is fast, reliable, secure, and scalable. ReactJS also lets
                the web developers to develop web applications that can change
                your data without any sort of reloading.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

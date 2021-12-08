import React from "react";
import Image from "next/image";

interface NavItemInterface {
  label: string;
  path: string;
}

export const Nav = () => {
  const navItems: NavItemInterface[] = [
    {
      label: "ক্যাটেগরি",
      path: "/",
    },
    {
      label: "বিষয়সমুহ",
      path: "/",
    },
    {
      label: "শায়েখ",
      path: "/",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="shadow fixed top-0 inset-x-0 z-40 bg-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/images/logo/logo-light.png"
              alt="me"
              width="150"
              height="50"
            />
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4 ">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <Image
                          src="/images/logo/logo-light.png"
                          alt="me"
                          width="150"
                          height="50"
                        />
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {navItems.map((item, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={item.path}
                              className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary"
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

import {MenuItem} from "@types";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {useState} from "react";
import {Sidebar} from "./Sidebar";

const items: MenuItem[] = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "blog",
    link: "/blog",
  },
  {
    label: "contact us",
    link: "/help",
  },
  {
    label: "faq",
    link: "/faq",
  },
  {
    label: "applications",
    link: "/applications",
  },
];
export const Navbar = () => {
  const {t} = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeLocale = (lang: string) => {
    router.push(router.asPath, undefined, {locale: lang});
  };

  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded  bg-gray-50 ">
      <div className="container flex flex-wrap  items-center mx-auto ">
        <a className="flex items-center flex-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Mofid_Securities_logo.svg/1200px-Mofid_Securities_logo.svg.png"
            className="mr-3 h-6 sm:h-9"
            alt="Mofid Logo"
          />
          <span className="  self-center text-xl font-semibold whitespace-nowrap text-blue-700 md:mx-4 ">
            {t("mofid stock brokerage")}
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`hidden w-full  md:w-auto md:block`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            {items.map(({label, link}, index) => {
              return (
                <li key={`${index}`} className="ml-3 ">
                  <a
                    href="#"
                    className="block py-2 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                    aria-current="page"
                  >
                    {t(label)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <a
          className=" hidden  flex-1 justify-end cursor-pointer md:flex"
          onClick={() => changeLocale(router.locale === "en" ? "fa" : "en")}
        >
          {t("En/Fa")}
        </a>
      </div>
      <Sidebar menuItems={items} isOpen={isOpen} />
    </nav>
  );
};

import {SideBarTypes} from "@types";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {LanguageContext} from "@lang";
import {useContext} from "react";

export const Sidebar = ({menuItems, isOpen}: SideBarTypes) => {
  const {t} = useTranslation();
  const {direction} = useContext(LanguageContext);

  const router = useRouter();
  const changeLocale = (lang: string) => {
    router.push(router.asPath, undefined, {locale: lang});
  };

  const getSideTranslate = (isOpen: boolean, dir: string) => {
    if (direction === "ltr") {
      return isOpen ? "-translate-x-full" : "translate-x-0";
    }
    if (direction === "rtl") {
      return isOpen ? "translate-x-full" : "translate-x-0";
    }
  };
  return (
    <aside
      className={`aside  md:hidden  ${getSideTranslate(isOpen, direction)}  `}
    >
      <ul className="flex flex-col p-4 mt-4 ">
        {menuItems.map(({label}, index) => {
          return (
            <li key={`${index}`}>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 text-blue-700"
                aria-current="page"
              >
                {t(label)}
              </a>
            </li>
          );
        })}
      </ul>
      <a
        className=" text-white   flex-1 cursor-pointer flex p-4 m-4"
        onClick={() => changeLocale(router.locale === "en" ? "fa" : "en")}
      >
        {t("En/Fa")}
      </a>
    </aside>
  );
};

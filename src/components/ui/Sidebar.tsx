import {SideBarTypes} from "@types";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

export const Sidebar = ({menuItems, isOpen}: SideBarTypes) => {
  const {t} = useTranslation();

  const router = useRouter();
  const changeLocale = (lang: string) => {
    router.push(router.asPath, undefined, {locale: lang});
  };
  return (
    <aside
      className={`aside  md:hidden  ${
        isOpen
          ? "translate-x-0"
          : router.locale === "fa"
          ? "translate-x-full"
          : "-translate-x-full"
      }  `}
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

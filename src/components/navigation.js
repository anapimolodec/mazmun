import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav className="flex h-20 border-b border-slate-800">
      <ul className="max-w-1200 w-full mx-auto border-x border-slate-800 flex justify-between items-end text-white">
        <li className="px-1 text-slate-400">
          <a href="/">/ {t("anapimolodec")}</a>
        </li>
        <li className="px-1 text-slate-400">
          <a href="/">/ {t("projects")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

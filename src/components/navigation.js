import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav className="flex h-20 border-b border-blue30">
      <ul className="max-w-1200 w-full mx-auto border-x border-blue30 flex justify-between items-end text-white">
        <li className="px-1">/ {t("anapimolodec")}</li>
        <li className="px-1">/ {t("projects")}</li>
      </ul>
    </nav>
  );
};

export default Navigation;

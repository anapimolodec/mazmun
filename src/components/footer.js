import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex h-20 border-t border-blue30">
      <div className="max-w-1200 w-full mx-auto border-x border-blue30 text-white flex items-center justify-center opacity-70">
        <p>{t("footer_text")}</p>
      </div>
    </footer>
  );
};

export default Footer;
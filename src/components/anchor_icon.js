import { Icon } from "@mui/material";

export const AnchorIcon = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-slate-400"
    >
      <Icon component={icon} fontSize="large"></Icon>
    </a>
  );
};

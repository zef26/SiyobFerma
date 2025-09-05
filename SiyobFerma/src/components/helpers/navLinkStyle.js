// helpers/navLinkStyle.js
export const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "#009440" : "inherit",
  textDecoration: "none",
  borderBottom: isActive ? "2px solid #009440" : "none",
  paddingBottom: "4px",
  transition: "all 0.3s ease", // плавный переход
});

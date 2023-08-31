/** Returns button/menu-item styles for each type */
export function getStyles(type) {
  if (type === "normal" || typeof type === "undefined")
    return "text-black font-medium hover:text-theme-red";
  else if (type === "big")
    return "border rounded-none text-white font-medium px-3 drop-shadow-md bg-theme-orange hover:bg-theme-orange-dark";
  else if (type === "mail")
    return "border rounded-none font-medium text-white px-3 drop-shadow-md bg-theme-red hover:bg-theme-red-dark";
  else if (type === "inactive")
    return "shadow-sm font-medium text-gray-500 bg-gray-100 italic";
  else if (type === "menu")
    return "shadow-sm font-medium text-black border-black hover:bg-gray-100";
}

import Menu from "./Menu";
import DrpMenu from "./CustomNav";
import Link from 'next/link';
import { useEffect, useState } from "react";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        
          <Link href='/category/[id]' as={`/category/${submenu.id}`} key={index}>
          <DrpMenu items={submenu} key={index} depthLevel={depthLevel} />
        </Link>
        
      ))}
    </ul>
  );
};

export default Dropdown;
   
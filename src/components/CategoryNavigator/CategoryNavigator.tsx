import React from "react";
import clsx from "clsx";
import { categoryTag } from "../../lib/category";
import "./CategoryNavigator.css";
interface ICategoryNavigatorProps {
  categoryActive: string;
  setCategoryActive: React.Dispatch<React.SetStateAction<string>>;
}
export default function CategoryNavigator({
  categoryActive,
  setCategoryActive,
}: ICategoryNavigatorProps) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {Object.keys(categoryTag).map((section) => (
          <li
            className={clsx("nav__item", {
              "nav__item-active": categoryActive === section,
            })}
            key={section}
          >
            <button
              className="nav__button"
              onClick={() => setCategoryActive(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import React from 'react';
import './SubNavigation.scss';

interface SubNavigationProps {
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
}

const SubNavigation: React.FC<SubNavigationProps> = ({ items, activeItem, onItemClick }) => {
  return (
    <nav className="sub-navigation">
      <div className="sub-navigation__container">
        {items.map((item) => (
          <button
            key={item}
            className={`sub-navigation__item ${activeItem === item ? 'sub-navigation__item--active' : ''}`}
            onClick={() => onItemClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SubNavigation;
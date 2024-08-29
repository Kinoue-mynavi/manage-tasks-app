import React, { useCallback, useState, useEffect, useRef } from 'react';

import {
  buttonStyle,
  listContainerStyle,
  container,
  listItemStyle,
} from './style.css';

type DropdownItem = {
  label: React.ReactNode;
  value: string;
  onClick?: () => void;
};

type Props = {
  label: React.ReactNode;
  items: DropdownItem[];
};

export const Dropdown: React.FC<Props> = React.memo(({ items, label }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClickToggleButton = useCallback(() => {
    setIsShown((prev) => !prev);
  }, []);

  const insideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = insideRef.current;
    if (!el) return;

    const hundleClickOutside = (e: MouseEvent) => {
      if (!el?.contains(e.target as Node)) {
        setIsShown(false);
      }
    };

    document.addEventListener('click', hundleClickOutside);
    return () => {
      document.removeEventListener('click', hundleClickOutside);
    };
  }, [insideRef]);

  if (!items.length) return null;

  return (
    <div className={container} ref={insideRef}>
      <button className={buttonStyle} onClick={handleClickToggleButton}>
        {label}
      </button>
      {isShown && (
        <ul className={listContainerStyle}>
          {items.map(({ value, label: itemLabel, onClick }) => (
            <li
              key={value}
              role="presentation"
              onClick={onClick}
              className={listItemStyle}
            >
              {itemLabel}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

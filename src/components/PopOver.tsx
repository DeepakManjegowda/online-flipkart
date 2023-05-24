import { Popover } from "@mui/material";
import { useState } from "react";

interface PopOverProps {
  category: {
    name: string;
    url: string;
  }[];
  text: string;
}

const PopOver = (props: PopOverProps) => {
  const { category, text } = props;
  const [shortcutanchorEl, setShotCutAnchorEl] =
    useState<HTMLButtonElement | null>(null);

  const handleShortCutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShotCutAnchorEl(event.currentTarget);
  };

  const handleShortcutClose = () => {
    setShotCutAnchorEl(null);
  };

  const openshortcut = Boolean(shortcutanchorEl);

  const id_shortcut = openshortcut ? "simple-popover2" : undefined;
  return (
    <div>
      <button className="" onClick={handleShortCutClick}>
        <div> {text}</div>
      </button>
      <div>
        <Popover
          className="mt-2 cursor-pointer"
          id={id_shortcut}
          open={openshortcut}
          anchorEl={shortcutanchorEl}
          onClose={handleShortcutClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="w-[180px] text-slate-900 h-auto overflow-auto">
            {category.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center p-1 border-b-2 border-x-2 overflow-x whitespace-nowrap"
                >
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default PopOver;

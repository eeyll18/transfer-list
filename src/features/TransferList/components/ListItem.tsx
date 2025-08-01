import type React from "react";
import type { TransferItem } from "../types";

interface ListItemProps {
  item: TransferItem;
  isChecked: boolean;
  onToggle: (item: TransferItem) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  item,
  isChecked,
  onToggle,
}) => {
  const handleToggle = () => {
    onToggle(item);
  };

  return (
    <li
      className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
      onClick={handleToggle}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        onClick={(e) => e.stopPropagation()}
        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
      />
      <label
        className="ml-3 text-sm text-gray-800 select-none cursor-pointer"
        htmlFor={`checkbox-${item.id}`}
      >
        {item.label}
      </label>
    </li>
  );
};

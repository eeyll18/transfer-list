import type React from "react";
import type { TransferItem } from "../types";
import { ListItem } from "./ListItem";

interface ListPanelProps {
  title: string;
  items: TransferItem[];
  checkedItems: Set<string>;
  onToggle: (item: TransferItem, side: "left" | "right") => void;
  side: "left" | "right";
}

export const ListPanel: React.FC<ListPanelProps> = ({
  title,
  items,
  checkedItems,
  onToggle,
  side,
}) => {
  return (
    <div className="w-full lg:w-64 border border-gray-300 rounded-lg shadow-sm bg-white flex flex-col">
      <div className="px-4 py-2 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">
          {checkedItems.size}/{items.length} seçildi
        </p>
      </div>

      <ul className="flex-1 p-2 overflow-y-auto h-64 space-y-1">
        {items.length > 0 ? (
          items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              isChecked={checkedItems.has(item.id)}
              onToggle={(toggledItem) => onToggle(toggledItem, side)}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 italic">
            Liste Boş
          </div>
        )}
      </ul>
    </div>
  );
};
